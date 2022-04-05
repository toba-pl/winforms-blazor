"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class Length extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Length,Length.evaluator(),returnType_1.ReturnType.Number,functionUtils_1.FunctionUtils.validateUnaryString)}static evaluator(){return functionUtils_1.FunctionUtils.apply(args=>functionUtils_internal_1.InternalFunctionUtils.parseStringOrUndefined(args[0]).length,functionUtils_1.FunctionUtils.verifyStringOrNull)}}exports.Length=Length;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbmd0aC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsInJlcXVpcmUiLCJleHByZXNzaW9uVHlwZV8xIiwiZnVuY3Rpb25VdGlsc18xIiwiZnVuY3Rpb25VdGlsc19pbnRlcm5hbF8xIiwicmV0dXJuVHlwZV8xIiwiTGVuZ3RoIiwiRXhwcmVzc2lvbkV2YWx1YXRvciIsIltvYmplY3QgT2JqZWN0XSIsInN1cGVyIiwiRXhwcmVzc2lvblR5cGUiLCJldmFsdWF0b3IiLCJSZXR1cm5UeXBlIiwiTnVtYmVyIiwiRnVuY3Rpb25VdGlscyIsInZhbGlkYXRlVW5hcnlTdHJpbmciLCJhcHBseSIsImFyZ3MiLCJJbnRlcm5hbEZ1bmN0aW9uVXRpbHMiLCJwYXJzZVN0cmluZ09yVW5kZWZpbmVkIiwibGVuZ3RoIiwidmVyaWZ5U3RyaW5nT3JOdWxsIl0sIm1hcHBpbmdzIjoiQUFBQSxhQVFBQSxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxzQkFBd0JDLFFBQVEsMEJBQ2hDQyxpQkFBbUJELFFBQVEscUJBQzNCRSxnQkFBa0JGLFFBQVEsb0JBQzFCRyx5QkFBMkJILFFBQVEsNkJBQ25DSSxhQUFlSixRQUFRLGlCQUk3QixNQUFNSyxlQUFlTixzQkFBc0JPLG9CQUl2Q0MsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixPQUFRQSxPQUFPSyxZQUFhTixhQUFhTyxXQUFXQyxPQUFRVixnQkFBZ0JXLGNBQWNDLHFCQUtwSVAsbUJBQ0ksT0FBT0wsZ0JBQWdCVyxjQUFjRSxNQUFPQyxNQUFTYix5QkFBeUJjLHNCQUFzQkMsdUJBQXVCRixLQUFLLElBQUlHLE9BQVFqQixnQkFBZ0JXLGNBQWNPLHFCQUdsTHZCLFFBQVFRLE9BQVNBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL2xlbmd0aC5qcyJ9