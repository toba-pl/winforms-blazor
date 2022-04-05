"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class IsFloat extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.IsFloat,IsFloat.evaluator(),returnType_1.ReturnType.Boolean,functionUtils_1.FunctionUtils.validateUnary)}static evaluator(){return functionUtils_1.FunctionUtils.apply(args=>functionUtils_1.FunctionUtils.isNumber(args[0])&&!Number.isInteger(args[0]))}}exports.IsFloat=IsFloat;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzRmxvYXQuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsInJldHVyblR5cGVfMSIsIklzRmxvYXQiLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJCb29sZWFuIiwiRnVuY3Rpb25VdGlscyIsInZhbGlkYXRlVW5hcnkiLCJhcHBseSIsImFyZ3MiLCJpc051bWJlciIsIk51bWJlciIsImlzSW50ZWdlciJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcsYUFBZUgsUUFBUSxpQkFLN0IsTUFBTUksZ0JBQWdCTCxzQkFBc0JNLG9CQUl4Q0MsY0FDSUMsTUFBTU4saUJBQWlCTyxlQUFlSixRQUFTQSxRQUFRSyxZQUFhTixhQUFhTyxXQUFXQyxRQUFTVCxnQkFBZ0JVLGNBQWNDLGVBS3ZJUCxtQkFDSSxPQUFPSixnQkFBZ0JVLGNBQWNFLE1BQU9DLE1BQVNiLGdCQUFnQlUsY0FBY0ksU0FBU0QsS0FBSyxNQUFRRSxPQUFPQyxVQUFVSCxLQUFLLE1BR3ZJbEIsUUFBUU8sUUFBVUEiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvaXNGbG9hdC5qcyJ9