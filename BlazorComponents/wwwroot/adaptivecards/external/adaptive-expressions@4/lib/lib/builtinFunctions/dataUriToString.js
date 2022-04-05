"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213),atob_lite_1=__importDefault(require(395));class DataUriToString extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.DataUriToString,DataUriToString.evaluator(),returnType_1.ReturnType.String,functionUtils_1.FunctionUtils.validateUnary)}static evaluator(){return functionUtils_1.FunctionUtils.apply(args=>atob_lite_1.default(args[0].slice(args[0].indexOf(",")+1)),functionUtils_1.FunctionUtils.verifyString)}}exports.DataUriToString=DataUriToString;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFVcmlUb1N0cmluZy5qcyJdLCJuYW1lcyI6WyJfX2ltcG9ydERlZmF1bHQiLCJ0aGlzIiwibW9kIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsInJlcXVpcmUiLCJleHByZXNzaW9uVHlwZV8xIiwiZnVuY3Rpb25VdGlsc18xIiwicmV0dXJuVHlwZV8xIiwiYXRvYl9saXRlXzEiLCJEYXRhVXJpVG9TdHJpbmciLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJTdHJpbmciLCJGdW5jdGlvblV0aWxzIiwidmFsaWRhdGVVbmFyeSIsImFwcGx5IiwiYXJncyIsInNsaWNlIiwiaW5kZXhPZiIsInZlcmlmeVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQSxJQUFJQSxnQkFBbUJDLE1BQVFBLEtBQUtELGlCQUFvQixTQUFVRSxLQUM5RCxPQUFRQSxLQUFPQSxJQUFJQyxXQUFjRCxJQUFNLENBQUVFLFFBQVdGLE1BRXhERyxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxzQkFBd0JDLFFBQVEsMEJBQ2hDQyxpQkFBbUJELFFBQVEscUJBQzNCRSxnQkFBa0JGLFFBQVEsb0JBQzFCRyxhQUFlSCxRQUFRLGlCQUN2QkksWUFBY2QsZ0JBQWdCVSxRQUFRLGNBSTVDLE1BQU1LLHdCQUF3Qk4sc0JBQXNCTyxvQkFJaERDLGNBQ0lDLE1BQU1QLGlCQUFpQlEsZUFBZUosZ0JBQWlCQSxnQkFBZ0JLLFlBQWFQLGFBQWFRLFdBQVdDLE9BQVFWLGdCQUFnQlcsY0FBY0MsZUFLdEpQLG1CQUNJLE9BQU9MLGdCQUFnQlcsY0FBY0UsTUFBT0MsTUFBU1osWUFBWVYsUUFBUXNCLEtBQUssR0FBR0MsTUFBTUQsS0FBSyxHQUFHRSxRQUFRLEtBQU8sSUFBS2hCLGdCQUFnQlcsY0FBY00sZUFHekp0QixRQUFRUSxnQkFBa0JBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL2RhdGFVcmlUb1N0cmluZy5qcyJ9