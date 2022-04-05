"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213),functionUtils_internal_1=require(195);class Concat extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Concat,Concat.evaluator(),returnType_1.ReturnType.String|returnType_1.ReturnType.Array,functionUtils_1.FunctionUtils.validateAtLeastOne)}static evaluator(){return functionUtils_1.FunctionUtils.applySequence(args=>{const firstItem=args[0],secondItem=args[1],isFirstList=Array.isArray(firstItem),isSecondList=Array.isArray(secondItem);return null==firstItem&&null==secondItem?void 0:null==firstItem&&isSecondList?secondItem:null==secondItem&&isFirstList?firstItem:isFirstList&&isSecondList?firstItem.concat(secondItem):functionUtils_internal_1.InternalFunctionUtils.commonStringify(firstItem)+functionUtils_internal_1.InternalFunctionUtils.commonStringify(secondItem)})}}exports.Concat=Concat;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmNhdC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsInJlcXVpcmUiLCJleHByZXNzaW9uVHlwZV8xIiwiZnVuY3Rpb25VdGlsc18xIiwicmV0dXJuVHlwZV8xIiwiZnVuY3Rpb25VdGlsc19pbnRlcm5hbF8xIiwiQ29uY2F0IiwiRXhwcmVzc2lvbkV2YWx1YXRvciIsIltvYmplY3QgT2JqZWN0XSIsInN1cGVyIiwiRXhwcmVzc2lvblR5cGUiLCJldmFsdWF0b3IiLCJSZXR1cm5UeXBlIiwiU3RyaW5nIiwiQXJyYXkiLCJGdW5jdGlvblV0aWxzIiwidmFsaWRhdGVBdExlYXN0T25lIiwiYXBwbHlTZXF1ZW5jZSIsImFyZ3MiLCJmaXJzdEl0ZW0iLCJzZWNvbmRJdGVtIiwiaXNGaXJzdExpc3QiLCJpc0FycmF5IiwiaXNTZWNvbmRMaXN0IiwiY29uY2F0IiwiSW50ZXJuYWxGdW5jdGlvblV0aWxzIiwiY29tbW9uU3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQSxhQVFBQSxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxzQkFBd0JDLFFBQVEsMEJBQ2hDQyxpQkFBbUJELFFBQVEscUJBQzNCRSxnQkFBa0JGLFFBQVEsb0JBQzFCRyxhQUFlSCxRQUFRLGlCQUN2QkkseUJBQTJCSixRQUFRLDZCQUl6QyxNQUFNSyxlQUFlTixzQkFBc0JPLG9CQUl2Q0MsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixPQUFRQSxPQUFPSyxZQUFhUCxhQUFhUSxXQUFXQyxPQUFTVCxhQUFhUSxXQUFXRSxNQUFPWCxnQkFBZ0JZLGNBQWNDLG9CQUtwS1IsbUJBQ0ksT0FBT0wsZ0JBQWdCWSxjQUFjRSxjQUFlQyxPQUNoRCxNQUFNQyxVQUFZRCxLQUFLLEdBQ2pCRSxXQUFhRixLQUFLLEdBQ2xCRyxZQUFjUCxNQUFNUSxRQUFRSCxXQUM1QkksYUFBZVQsTUFBTVEsUUFBUUYsWUFDbkMsT0FBaUIsTUFBYkQsV0FBbUMsTUFBZEMsZ0JBQ3JCLEVBRWtCLE1BQWJELFdBQXFCSSxhQUNuQkgsV0FFWSxNQUFkQSxZQUFzQkMsWUFDcEJGLFVBRUZFLGFBQWVFLGFBQ2JKLFVBQVVLLE9BQU9KLFlBR2hCZix5QkFBeUJvQixzQkFBc0JDLGdCQUFnQlAsV0FBYWQseUJBQXlCb0Isc0JBQXNCQyxnQkFBZ0JOLGVBS25LdEIsUUFBUVEsT0FBU0EiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvY29uY2F0LmpzIn0=