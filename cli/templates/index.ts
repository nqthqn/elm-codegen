import codegenProgram from "./CodeGen.Generate.elm"
import starter from "./Starter.elm"
import elmJson from "./Elm.json"
import elmCodegenJson from "./ElmCodeGen.json"

export default {
  init: {
    elmJson,
    starter,
    codegenProgram,
    elmCodegenJson,
  },
}
