"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionType_1=require(192),functionUtils_1=require(196),comparisonEvaluator_1=require(23);class LessThan extends comparisonEvaluator_1.ComparisonEvaluator{constructor(){super(expressionType_1.ExpressionType.LessThan,LessThan.func,functionUtils_1.FunctionUtils.validateBinary,functionUtils_1.FunctionUtils.verifyNotNull)}static func(args){if(functionUtils_1.FunctionUtils.isNumber(args[0])&&functionUtils_1.FunctionUtils.isNumber(args[1])||"string"==typeof args[0]&&"string"==typeof args[1]||args[0]instanceof Date&&args[1]instanceof Date)return args[0]<args[1];throw new Error(`${args[0]} and ${args[1]} must be comparable.`)}}exports.LessThan=LessThan;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3NUaGFuLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXhwcmVzc2lvblR5cGVfMSIsInJlcXVpcmUiLCJmdW5jdGlvblV0aWxzXzEiLCJjb21wYXJpc29uRXZhbHVhdG9yXzEiLCJMZXNzVGhhbiIsIkNvbXBhcmlzb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiZnVuYyIsIkZ1bmN0aW9uVXRpbHMiLCJ2YWxpZGF0ZUJpbmFyeSIsInZlcmlmeU5vdE51bGwiLCJhcmdzIiwiaXNOdW1iZXIiLCJEYXRlIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLGFBUUFBLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLGlCQUFtQkMsUUFBUSxxQkFDM0JDLGdCQUFrQkQsUUFBUSxvQkFDMUJFLHNCQUF3QkYsUUFBUSx5QkFLdEMsTUFBTUcsaUJBQWlCRCxzQkFBc0JFLG9CQUl6Q0MsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixTQUFVQSxTQUFTSyxLQUFNUCxnQkFBZ0JRLGNBQWNDLGVBQWdCVCxnQkFBZ0JRLGNBQWNFLGVBSy9JTixZQUFZTyxNQUNSLEdBQUtYLGdCQUFnQlEsY0FBY0ksU0FBU0QsS0FBSyxLQUFPWCxnQkFBZ0JRLGNBQWNJLFNBQVNELEtBQUssS0FDNUUsaUJBQVpBLEtBQUssSUFBc0MsaUJBQVpBLEtBQUssSUFDM0NBLEtBQUssYUFBY0UsTUFBUUYsS0FBSyxhQUFjRSxLQUMvQyxPQUFPRixLQUFLLEdBQUtBLEtBQUssR0FHdEIsTUFBTSxJQUFJRyxTQUFTSCxLQUFLLFVBQVVBLEtBQUssMkJBSW5EZixRQUFRTSxTQUFXQSIsImZpbGUiOiIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnJhcmllcy9hZGFwdGl2ZS1leHByZXNzaW9ucy9saWIvYnVpbHRpbkZ1bmN0aW9ucy9sZXNzVGhhbi5qcyJ9