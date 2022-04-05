"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class Binary extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Binary,Binary.evaluator(),returnType_1.ReturnType.Object,functionUtils_1.FunctionUtils.validateUnary)}static evaluator(){return functionUtils_1.FunctionUtils.apply(args=>functionUtils_internal_1.InternalFunctionUtils.getTextEncoder().encode(args[0]),functionUtils_1.FunctionUtils.verifyString)}}exports.Binary=Binary;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmFyeS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsInJlcXVpcmUiLCJleHByZXNzaW9uVHlwZV8xIiwiZnVuY3Rpb25VdGlsc18xIiwiZnVuY3Rpb25VdGlsc19pbnRlcm5hbF8xIiwicmV0dXJuVHlwZV8xIiwiQmluYXJ5IiwiRXhwcmVzc2lvbkV2YWx1YXRvciIsIltvYmplY3QgT2JqZWN0XSIsInN1cGVyIiwiRXhwcmVzc2lvblR5cGUiLCJldmFsdWF0b3IiLCJSZXR1cm5UeXBlIiwiRnVuY3Rpb25VdGlscyIsInZhbGlkYXRlVW5hcnkiLCJhcHBseSIsImFyZ3MiLCJJbnRlcm5hbEZ1bmN0aW9uVXRpbHMiLCJnZXRUZXh0RW5jb2RlciIsImVuY29kZSIsInZlcmlmeVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcseUJBQTJCSCxRQUFRLDZCQUNuQ0ksYUFBZUosUUFBUSxpQkFJN0IsTUFBTUssZUFBZU4sc0JBQXNCTyxvQkFJdkNDLGNBQ0lDLE1BQU1QLGlCQUFpQlEsZUFBZUosT0FBUUEsT0FBT0ssWUFBYU4sYUFBYU8sV0FBV2hCLE9BQVFPLGdCQUFnQlUsY0FBY0MsZUFLcElOLG1CQUNJLE9BQU9MLGdCQUFnQlUsY0FBY0UsTUFBT0MsTUFBU1oseUJBQXlCYSxzQkFBc0JDLGlCQUFpQkMsT0FBT0gsS0FBSyxJQUFLYixnQkFBZ0JVLGNBQWNPLGVBRzVLdEIsUUFBUVEsT0FBU0EiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvYmluYXJ5LmpzIn0=