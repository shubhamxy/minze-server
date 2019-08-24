import {handleBodyRequestParsing, handleCompression, handleCors} from './common';

export const expressMiddlewares = [handleCors, handleBodyRequestParsing, handleCompression];

// apollo middlewares
export const apolloMiddlewares = [];
