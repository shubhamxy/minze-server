import { AuthPayloadResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";

export interface AuthPayloadParent {
  id: string;
  token: string;
}
// AuthPayloadResolvers.Type<TypeMap>
export const AuthPayload: any = {
  token: parent => parent.token,
  user: (parent, _args, ctx) => ctx.db.user({ id: parent.id })
};
