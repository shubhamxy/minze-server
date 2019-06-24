import { stringArg, mutationType } from 'nexus';
import { APP_SECRET, getUserId } from '../utils';
import { sign } from 'jsonwebtoken';
import { admin } from '../../services/firebase';

export const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        idToken: stringArg()
      },
      resolve: async (parent, { idToken }, ctx) => {
        try {
          // console.log(idToken);
          // @ts-ignore
          const response = await admin.auth().verifyIdToken(idToken);
          const user = await ctx.prisma.createUser({
            uid: response.uid
          });

          return {
            token: sign({ user: user }, APP_SECRET),
            user
          };
        } catch (error) {
          console.error(error);
          throw new Error(error);
        }
      }
    });

    t.field('login', {
      type: 'AuthPayload',
      args: {
        idToken: stringArg()
      },
      resolve: async (parent, { idToken }, context) => {
        try {
          // @ts-ignore
          const response = await admin.auth().verifyIdToken(idToken);
          const user = await context.prisma.user({ uid: response.uid });
          if (!user) {
            throw new Error(`No user found, maybe signup first.`);
          }
          return {
            token: sign({ userId: user.id }, APP_SECRET),
            user
          };
        } catch (error) {
          throw new Error(error);
        }
      }
    });
    t.field('deleteuser', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        console.warn('context: ' + JSON.stringify(ctx, null, 4));
        const userId = getUserId(ctx);
        return ctx.prisma.deleteUser({ id: userId });
      }
    });
    // t.field('createDraft', {
    //   type: 'Post',
    //   args: {
    //     title: stringArg(),
    //     content: stringArg({ nullable: true })
    //   },
    //   resolve: (parent, { title, content }, ctx) => {
    //     const userId = getUserId(ctx);
    //     return ctx.prisma.createPost({
    //       // @ts-ignore
    //       title,
    //       content,
    //       author: { connect: { id: userId } }
    //     });
    //   }
    // });

    // t.field('deletePost', {
    //   type: 'Post',
    //   nullable: true,
    //   args: { id: idArg() },
    //   resolve: (parent, { id }, ctx) => {
    //     return ctx.prisma.deletePost({ id });
    //   }
    // });

    // t.field('publish', {
    //   type: 'Post',
    //   nullable: true,
    //   args: { id: idArg() },
    //   resolve: (parent, { id }, ctx) => {
    //     return ctx.prisma.updatePost({
    //       where: { id },
    //       data: { published: true }
    //     });
    //   }
    // });
  }
});
