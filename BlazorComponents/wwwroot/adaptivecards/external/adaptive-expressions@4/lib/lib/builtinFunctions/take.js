"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class Take extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Take,Take.evaluator,returnType_1.ReturnType.Array|returnType_1.ReturnType.String,Take.validator)}static evaluator(expression,state,options){let result;const{value:arr,error:childrenError}=expression.children[0].tryEvaluate(state,options);let error=childrenError;if(!error)if(Array.isArray(arr)||"string"==typeof arr){let start;const startExpr=expression.children[1];({value:start,error:error}=startExpr.tryEvaluate(state,options)),error||Number.isInteger(start)||(error=`${startExpr} is not an integer.`),error||(start=Math.max(start,0),result=arr.slice(0,start))}else error=`${expression.children[0]} is not array or string.`;return{value:result,error:error}}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,[],returnType_1.ReturnType.Array|returnType_1.ReturnType.String,returnType_1.ReturnType.Number)}}exports.Take=Take;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRha2UuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsInJldHVyblR5cGVfMSIsIlRha2UiLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJBcnJheSIsIlN0cmluZyIsInZhbGlkYXRvciIsImV4cHJlc3Npb24iLCJzdGF0ZSIsIm9wdGlvbnMiLCJyZXN1bHQiLCJhcnIiLCJlcnJvciIsImNoaWxkcmVuRXJyb3IiLCJjaGlsZHJlbiIsInRyeUV2YWx1YXRlIiwiaXNBcnJheSIsInN0YXJ0Iiwic3RhcnRFeHByIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiTWF0aCIsIm1heCIsInNsaWNlIiwiRnVuY3Rpb25VdGlscyIsInZhbGlkYXRlT3JkZXIiXSwibWFwcGluZ3MiOiJBQUFBLGFBUUFBLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLHNCQUF3QkMsUUFBUSwwQkFDaENDLGlCQUFtQkQsUUFBUSxxQkFDM0JFLGdCQUFrQkYsUUFBUSxvQkFDMUJHLGFBQWVILFFBQVEsaUJBSTdCLE1BQU1JLGFBQWFMLHNCQUFzQk0sb0JBSXJDQyxjQUNJQyxNQUFNTixpQkFBaUJPLGVBQWVKLEtBQU1BLEtBQUtLLFVBQVdOLGFBQWFPLFdBQVdDLE1BQVFSLGFBQWFPLFdBQVdFLE9BQVFSLEtBQUtTLFdBS3JJUCxpQkFBaUJRLFdBQVlDLE1BQU9DLFNBQ2hDLElBQUlDLE9BQ0osTUFBUW5CLE1BQU9vQixJQUFLQyxNQUFPQyxlQUFrQk4sV0FBV08sU0FBUyxHQUFHQyxZQUFZUCxNQUFPQyxTQUN2RixJQUFJRyxNQUFRQyxjQUNaLElBQUtELE1BQ0QsR0FBSVIsTUFBTVksUUFBUUwsTUFBdUIsaUJBQVJBLElBQWtCLENBQy9DLElBQUlNLE1BQ0osTUFBTUMsVUFBWVgsV0FBV08sU0FBUyxLQUNuQ3ZCLE1BQU8wQixNQUFPTCxNQUFBQSxPQUFVTSxVQUFVSCxZQUFZUCxNQUFPQyxVQUNuREcsT0FBVU8sT0FBT0MsVUFBVUgsU0FDNUJMLFNBQVdNLGdDQUVWTixRQUNESyxNQUFRSSxLQUFLQyxJQUFJTCxNQUFPLEdBQ3hCUCxPQUFTQyxJQUFJWSxNQUFNLEVBQUdOLGFBSTFCTCxTQUFXTCxXQUFXTyxTQUFTLDZCQUd2QyxNQUFPLENBQUV2QixNQUFPbUIsT0FBUUUsTUFBQUEsT0FLNUJiLGlCQUFpQlEsWUFDYlosZ0JBQWdCNkIsY0FBY0MsY0FBY2xCLFdBQVksR0FBSVgsYUFBYU8sV0FBV0MsTUFBUVIsYUFBYU8sV0FBV0UsT0FBUVQsYUFBYU8sV0FBV2dCLFNBRzVKN0IsUUFBUU8sS0FBT0EiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvdGFrZS5qcyJ9