"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class Month extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Month,Month.evaluator(),returnType_1.ReturnType.Number,functionUtils_1.FunctionUtils.validateUnaryString)}static evaluator(){return functionUtils_1.FunctionUtils.applyWithError(args=>{const error=functionUtils_internal_1.InternalFunctionUtils.verifyISOTimestamp(args[0]);return error?{value:void 0,error:error}:{value:new Date(args[0]).getUTCMonth()+1,error:error}},functionUtils_1.FunctionUtils.verifyString)}}exports.Month=Month;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbnRoLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXhwcmVzc2lvbkV2YWx1YXRvcl8xIiwicmVxdWlyZSIsImV4cHJlc3Npb25UeXBlXzEiLCJmdW5jdGlvblV0aWxzXzEiLCJmdW5jdGlvblV0aWxzX2ludGVybmFsXzEiLCJyZXR1cm5UeXBlXzEiLCJNb250aCIsIkV4cHJlc3Npb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiZXZhbHVhdG9yIiwiUmV0dXJuVHlwZSIsIk51bWJlciIsIkZ1bmN0aW9uVXRpbHMiLCJ2YWxpZGF0ZVVuYXJ5U3RyaW5nIiwiYXBwbHlXaXRoRXJyb3IiLCJhcmdzIiwiZXJyb3IiLCJJbnRlcm5hbEZ1bmN0aW9uVXRpbHMiLCJ2ZXJpZnlJU09UaW1lc3RhbXAiLCJ1bmRlZmluZWQiLCJEYXRlIiwiZ2V0VVRDTW9udGgiLCJ2ZXJpZnlTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLGFBUUFBLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLHNCQUF3QkMsUUFBUSwwQkFDaENDLGlCQUFtQkQsUUFBUSxxQkFDM0JFLGdCQUFrQkYsUUFBUSxvQkFDMUJHLHlCQUEyQkgsUUFBUSw2QkFDbkNJLGFBQWVKLFFBQVEsaUJBSTdCLE1BQU1LLGNBQWNOLHNCQUFzQk8sb0JBSXRDQyxjQUNJQyxNQUFNUCxpQkFBaUJRLGVBQWVKLE1BQU9BLE1BQU1LLFlBQWFOLGFBQWFPLFdBQVdDLE9BQVFWLGdCQUFnQlcsY0FBY0MscUJBS2xJUCxtQkFDSSxPQUFPTCxnQkFBZ0JXLGNBQWNFLGVBQWdCQyxPQUNqRCxNQUFNQyxNQUFRZCx5QkFBeUJlLHNCQUFzQkMsbUJBQW1CSCxLQUFLLElBQ3JGLE9BQUtDLE1BR0UsQ0FBRW5CLFdBQU9zQixFQUFXSCxNQUFBQSxPQUZoQixDQUFFbkIsTUFBTyxJQUFJdUIsS0FBS0wsS0FBSyxJQUFJTSxjQUFnQixFQUFHTCxNQUFBQSxRQUcxRGYsZ0JBQWdCVyxjQUFjVSxlQUd6QzFCLFFBQVFRLE1BQVFBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL21vbnRoLmpzIn0=