import "graphql-import-node";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { buildASTSchema } from "graphql";
const mySchema = require("./test.graphql");

buildASTSchema(mySchema);
