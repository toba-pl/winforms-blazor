"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class IsPresent extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.IsPresent,IsPresent.evaluator,returnType_1.ReturnType.Boolean,functionUtils_1.FunctionUtils.validateUnary)}static evaluator(expr,state,options){let parsed,value=!1;const{args:args,error:childrenError}=functionUtils_1.FunctionUtils.evaluateChildren(expr,state,options);let error=childrenError;return error||({timexProperty:parsed,error:error}=functionUtils_internal_1.InternalFunctionUtils.parseTimexProperty(args[0])),parsed&&!error&&(value=void 0!==parsed.now),{value:value,error:error}}}exports.IsPresent=IsPresent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzUHJlc2VudC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsInJlcXVpcmUiLCJleHByZXNzaW9uVHlwZV8xIiwiZnVuY3Rpb25VdGlsc18xIiwiZnVuY3Rpb25VdGlsc19pbnRlcm5hbF8xIiwicmV0dXJuVHlwZV8xIiwiSXNQcmVzZW50IiwiRXhwcmVzc2lvbkV2YWx1YXRvciIsIltvYmplY3QgT2JqZWN0XSIsInN1cGVyIiwiRXhwcmVzc2lvblR5cGUiLCJldmFsdWF0b3IiLCJSZXR1cm5UeXBlIiwiQm9vbGVhbiIsIkZ1bmN0aW9uVXRpbHMiLCJ2YWxpZGF0ZVVuYXJ5IiwiZXhwciIsInN0YXRlIiwib3B0aW9ucyIsInBhcnNlZCIsImFyZ3MiLCJlcnJvciIsImNoaWxkcmVuRXJyb3IiLCJldmFsdWF0ZUNoaWxkcmVuIiwidGltZXhQcm9wZXJ0eSIsIkludGVybmFsRnVuY3Rpb25VdGlscyIsInBhcnNlVGltZXhQcm9wZXJ0eSIsInVuZGVmaW5lZCIsIm5vdyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcseUJBQTJCSCxRQUFRLDZCQUNuQ0ksYUFBZUosUUFBUSxpQkFJN0IsTUFBTUssa0JBQWtCTixzQkFBc0JPLG9CQUkxQ0MsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixVQUFXQSxVQUFVSyxVQUFXTixhQUFhTyxXQUFXQyxRQUFTVixnQkFBZ0JXLGNBQWNDLGVBS3pJUCxpQkFBaUJRLEtBQU1DLE1BQU9DLFNBQzFCLElBQUlDLE9BQ0FwQixPQUFRLEVBQ1osTUFBTXFCLEtBQUVBLEtBQU1DLE1BQU9DLGVBQWtCbkIsZ0JBQWdCVyxjQUFjUyxpQkFBaUJQLEtBQU1DLE1BQU9DLFNBQ25HLElBQUlHLE1BQVFDLGNBT1osT0FOS0QsU0FDRUcsY0FBZUwsT0FBUUUsTUFBT0EsT0FBVWpCLHlCQUF5QnFCLHNCQUFzQkMsbUJBQW1CTixLQUFLLEtBRWxIRCxTQUFXRSxRQUNYdEIsV0FBdUI0QixJQUFmUixPQUFPUyxLQUVaLENBQUU3QixNQUFBQSxNQUFPc0IsTUFBQUEsUUFHeEJ2QixRQUFRUSxVQUFZQSIsImZpbGUiOiIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnJhcmllcy9hZGFwdGl2ZS1leHByZXNzaW9ucy9saWIvYnVpbHRpbkZ1bmN0aW9ucy9pc1ByZXNlbnQuanMifQ==