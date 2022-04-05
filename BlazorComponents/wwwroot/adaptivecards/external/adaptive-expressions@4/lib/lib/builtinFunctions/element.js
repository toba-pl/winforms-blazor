"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),options_1=require(204),returnType_1=require(213);class Element extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Element,Element.evaluator,returnType_1.ReturnType.Object,functionUtils_1.FunctionUtils.validateBinary)}static evaluator(expression,state,options){let value;const instance=expression.children[0],index=expression.children[1],{value:inst,error:evalError}=instance.tryEvaluate(state,options);let error=evalError;if(!error){let idxValue;const newOptions=new options_1.Options(options);if(newOptions.nullSubstitution=void 0,({value:idxValue,error:error}=index.tryEvaluate(state,newOptions)),!error)return Number.isInteger(idxValue)?({value:value,error:error}=functionUtils_internal_1.InternalFunctionUtils.accessIndex(inst,Number(idxValue))):"string"==typeof idxValue?({value:value,error:error}=functionUtils_internal_1.InternalFunctionUtils.accessProperty(inst,idxValue.toString())):error=`Could not coerce ${index} to an int or string.`,{value:value,error:error}}}}exports.Element=Element;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsImZ1bmN0aW9uVXRpbHNfaW50ZXJuYWxfMSIsIm9wdGlvbnNfMSIsInJldHVyblR5cGVfMSIsIkVsZW1lbnQiLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJGdW5jdGlvblV0aWxzIiwidmFsaWRhdGVCaW5hcnkiLCJleHByZXNzaW9uIiwic3RhdGUiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJjaGlsZHJlbiIsImluZGV4IiwiaW5zdCIsImVycm9yIiwiZXZhbEVycm9yIiwidHJ5RXZhbHVhdGUiLCJpZHhWYWx1ZSIsIm5ld09wdGlvbnMiLCJPcHRpb25zIiwibnVsbFN1YnN0aXR1dGlvbiIsInVuZGVmaW5lZCIsIk51bWJlciIsImlzSW50ZWdlciIsIkludGVybmFsRnVuY3Rpb25VdGlscyIsImFjY2Vzc0luZGV4IiwiYWNjZXNzUHJvcGVydHkiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcseUJBQTJCSCxRQUFRLDZCQUNuQ0ksVUFBWUosUUFBUSxjQUNwQkssYUFBZUwsUUFBUSxpQkFLN0IsTUFBTU0sZ0JBQWdCUCxzQkFBc0JRLG9CQUl4Q0MsY0FDSUMsTUFBTVIsaUJBQWlCUyxlQUFlSixRQUFTQSxRQUFRSyxVQUFXTixhQUFhTyxXQUFXakIsT0FBUU8sZ0JBQWdCVyxjQUFjQyxnQkFLcElOLGlCQUFpQk8sV0FBWUMsTUFBT0MsU0FDaEMsSUFBSW5CLE1BQ0osTUFBTW9CLFNBQVdILFdBQVdJLFNBQVMsR0FDL0JDLE1BQVFMLFdBQVdJLFNBQVMsSUFDMUJyQixNQUFPdUIsS0FBTUMsTUFBT0MsV0FBY0wsU0FBU00sWUFBWVIsTUFBT0MsU0FDdEUsSUFBSUssTUFBUUMsVUFDWixJQUFLRCxNQUFPLENBQ1IsSUFBSUcsU0FDSixNQUFNQyxXQUFhLElBQUl0QixVQUFVdUIsUUFBUVYsU0FHekMsR0FGQVMsV0FBV0Usc0JBQW1CQyxJQUMzQi9CLE1BQU8yQixTQUFVSCxNQUFBQSxPQUFVRixNQUFNSSxZQUFZUixNQUFPVSxjQUNsREosTUFVRCxPQVRJUSxPQUFPQyxVQUFVTixZQUNkM0IsTUFBQUEsTUFBT3dCLE1BQUFBLE9BQVVuQix5QkFBeUI2QixzQkFBc0JDLFlBQVlaLEtBQU1TLE9BQU9MLFlBRW5FLGlCQUFiQSxXQUNUM0IsTUFBQUEsTUFBT3dCLE1BQUFBLE9BQVVuQix5QkFBeUI2QixzQkFBc0JFLGVBQWViLEtBQU1JLFNBQVNVLGFBR2pHYiwwQkFBNEJGLDZCQUV6QixDQUFFdEIsTUFBQUEsTUFBT3dCLE1BQUFBLFNBS2hDekIsUUFBUVMsUUFBVUEiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvZWxlbWVudC5qcyJ9