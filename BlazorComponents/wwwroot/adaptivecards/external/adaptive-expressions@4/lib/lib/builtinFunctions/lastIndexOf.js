"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class LastIndexOf extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.LastIndexOf,LastIndexOf.evaluator,returnType_1.ReturnType.Number,LastIndexOf.validator)}static evaluator(expression,state,options){let value=-1;const{args:args,error:childrenError}=functionUtils_1.FunctionUtils.evaluateChildren(expression,state,options);let error=childrenError;if(!error)if(null==args[0]||"string"==typeof args[0])if(void 0===args[1]||"string"==typeof args[1]){const str=functionUtils_internal_1.InternalFunctionUtils.parseStringOrUndefined(args[0]),searchValue=functionUtils_internal_1.InternalFunctionUtils.parseStringOrUndefined(args[1]);value=str.lastIndexOf(searchValue,str.length-1)}else error=`Can only look for indexof string in ${expression}`;else Array.isArray(args[0])?value=args[0].lastIndexOf(args[1]):error=`${expression} works only on string or list.`;return{value:value,error:error}}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,[],returnType_1.ReturnType.String|returnType_1.ReturnType.Array,returnType_1.ReturnType.Object)}}exports.LastIndexOf=LastIndexOf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhc3RJbmRleE9mLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXhwcmVzc2lvbkV2YWx1YXRvcl8xIiwicmVxdWlyZSIsImV4cHJlc3Npb25UeXBlXzEiLCJmdW5jdGlvblV0aWxzXzEiLCJmdW5jdGlvblV0aWxzX2ludGVybmFsXzEiLCJyZXR1cm5UeXBlXzEiLCJMYXN0SW5kZXhPZiIsIkV4cHJlc3Npb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiZXZhbHVhdG9yIiwiUmV0dXJuVHlwZSIsIk51bWJlciIsInZhbGlkYXRvciIsImV4cHJlc3Npb24iLCJzdGF0ZSIsIm9wdGlvbnMiLCJhcmdzIiwiZXJyb3IiLCJjaGlsZHJlbkVycm9yIiwiRnVuY3Rpb25VdGlscyIsImV2YWx1YXRlQ2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJzdHIiLCJJbnRlcm5hbEZ1bmN0aW9uVXRpbHMiLCJwYXJzZVN0cmluZ09yVW5kZWZpbmVkIiwic2VhcmNoVmFsdWUiLCJsYXN0SW5kZXhPZiIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsInZhbGlkYXRlT3JkZXIiLCJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLGFBUUFBLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLHNCQUF3QkMsUUFBUSwwQkFDaENDLGlCQUFtQkQsUUFBUSxxQkFDM0JFLGdCQUFrQkYsUUFBUSxvQkFDMUJHLHlCQUEyQkgsUUFBUSw2QkFDbkNJLGFBQWVKLFFBQVEsaUJBSzdCLE1BQU1LLG9CQUFvQk4sc0JBQXNCTyxvQkFJNUNDLGNBQ0lDLE1BQU1QLGlCQUFpQlEsZUFBZUosWUFBYUEsWUFBWUssVUFBV04sYUFBYU8sV0FBV0MsT0FBUVAsWUFBWVEsV0FLMUhOLGlCQUFpQk8sV0FBWUMsTUFBT0MsU0FDaEMsSUFBSWxCLE9BQVMsRUFDYixNQUFNbUIsS0FBRUEsS0FBTUMsTUFBT0MsZUFBa0JqQixnQkFBZ0JrQixjQUFjQyxpQkFBaUJQLFdBQVlDLE1BQU9DLFNBQ3pHLElBQUlFLE1BQVFDLGNBQ1osSUFBS0QsTUFDRCxHQUFlLE1BQVhELEtBQUssSUFBaUMsaUJBQVpBLEtBQUssR0FDL0IsUUFBZ0JLLElBQVpMLEtBQUssSUFBdUMsaUJBQVpBLEtBQUssR0FBaUIsQ0FDdEQsTUFBTU0sSUFBTXBCLHlCQUF5QnFCLHNCQUFzQkMsdUJBQXVCUixLQUFLLElBQ2pGUyxZQUFjdkIseUJBQXlCcUIsc0JBQXNCQyx1QkFBdUJSLEtBQUssSUFDL0ZuQixNQUFReUIsSUFBSUksWUFBWUQsWUFBYUgsSUFBSUssT0FBUyxRQUdsRFYsNkNBQStDSixrQkFHOUNlLE1BQU1DLFFBQVFiLEtBQUssSUFDeEJuQixNQUFRbUIsS0FBSyxHQUFHVSxZQUFZVixLQUFLLElBR2pDQyxTQUFXSiwyQ0FHbkIsTUFBTyxDQUFFaEIsTUFBQUEsTUFBT29CLE1BQUFBLE9BS3BCWCxpQkFBaUJPLFlBQ2JaLGdCQUFnQmtCLGNBQWNXLGNBQWNqQixXQUFZLEdBQUlWLGFBQWFPLFdBQVdxQixPQUFTNUIsYUFBYU8sV0FBV2tCLE1BQU96QixhQUFhTyxXQUFXaEIsU0FHNUpFLFFBQVFRLFlBQWNBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL2xhc3RJbmRleE9mLmpzIn0=