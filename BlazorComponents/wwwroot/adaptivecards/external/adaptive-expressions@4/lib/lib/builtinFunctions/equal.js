"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionType_1=require(192),functionUtils_1=require(196),comparisonEvaluator_1=require(23);exports.Equal=class extends comparisonEvaluator_1.ComparisonEvaluator{constructor(){super(expressionType_1.ExpressionType.Equal,args=>functionUtils_1.FunctionUtils.commonEquals(args[0],args[1]),functionUtils_1.FunctionUtils.validateBinary)}};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWFsLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXhwcmVzc2lvblR5cGVfMSIsInJlcXVpcmUiLCJmdW5jdGlvblV0aWxzXzEiLCJjb21wYXJpc29uRXZhbHVhdG9yXzEiLCJFcXVhbCIsIkNvbXBhcmlzb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiYXJncyIsIkZ1bmN0aW9uVXRpbHMiLCJjb21tb25FcXVhbHMiLCJ2YWxpZGF0ZUJpbmFyeSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsaUJBQW1CQyxRQUFRLHFCQUMzQkMsZ0JBQWtCRCxRQUFRLG9CQUMxQkUsc0JBQXdCRixRQUFRLHlCQWF0Q0gsUUFBUU0sTUFSUixjQUFvQkQsc0JBQXNCRSxvQkFJdENDLGNBQ0lDLE1BQU1QLGlCQUFpQlEsZUFBZUosTUFBUUssTUFBU1AsZ0JBQWdCUSxjQUFjQyxhQUFhRixLQUFLLEdBQUlBLEtBQUssSUFBS1AsZ0JBQWdCUSxjQUFjRSIsImZpbGUiOiIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnJhcmllcy9hZGFwdGl2ZS1leHByZXNzaW9ucy9saWIvYnVpbHRpbkZ1bmN0aW9ucy9lcXVhbC5qcyJ9