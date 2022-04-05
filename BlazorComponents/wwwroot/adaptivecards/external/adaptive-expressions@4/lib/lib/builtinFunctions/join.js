"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class Join extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Join,Join.evaluator,returnType_1.ReturnType.String,Join.validator)}static evaluator(expression,state,options){let value;const{args:args,error:childrenError}=functionUtils_1.FunctionUtils.evaluateChildren(expression,state,options);let error=childrenError;if(!error)if(Array.isArray(args[0]))if(2===args.length)value=args[0].join(args[1]);else if(args[0].length<3)value=args[0].join(args[2]);else{value=args[0].slice(0,args[0].length-1).join(args[1]).concat(args[2],args[0][args[0].length-1])}else error=`${expression.children[0]} evaluates to ${args[0]} which is not a list.`;return{value:value,error:error}}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,[returnType_1.ReturnType.String],returnType_1.ReturnType.Array,returnType_1.ReturnType.String)}}exports.Join=Join;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4uanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsInJldHVyblR5cGVfMSIsIkpvaW4iLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJTdHJpbmciLCJ2YWxpZGF0b3IiLCJleHByZXNzaW9uIiwic3RhdGUiLCJvcHRpb25zIiwiYXJncyIsImVycm9yIiwiY2hpbGRyZW5FcnJvciIsIkZ1bmN0aW9uVXRpbHMiLCJldmFsdWF0ZUNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiam9pbiIsInNsaWNlIiwiY29uY2F0IiwiY2hpbGRyZW4iLCJ2YWxpZGF0ZU9yZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxhQVFBQSxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxzQkFBd0JDLFFBQVEsMEJBQ2hDQyxpQkFBbUJELFFBQVEscUJBQzNCRSxnQkFBa0JGLFFBQVEsb0JBQzFCRyxhQUFlSCxRQUFRLGlCQUk3QixNQUFNSSxhQUFhTCxzQkFBc0JNLG9CQUlyQ0MsY0FDSUMsTUFBTU4saUJBQWlCTyxlQUFlSixLQUFNQSxLQUFLSyxVQUFXTixhQUFhTyxXQUFXQyxPQUFRUCxLQUFLUSxXQUtyR04saUJBQWlCTyxXQUFZQyxNQUFPQyxTQUNoQyxJQUFJakIsTUFDSixNQUFNa0IsS0FBRUEsS0FBTUMsTUFBT0MsZUFBa0JoQixnQkFBZ0JpQixjQUFjQyxpQkFBaUJQLFdBQVlDLE1BQU9DLFNBQ3pHLElBQUlFLE1BQVFDLGNBQ1osSUFBS0QsTUFDRCxHQUFLSSxNQUFNQyxRQUFRTixLQUFLLElBSXBCLEdBQW9CLElBQWhCQSxLQUFLTyxPQUNMekIsTUFBUWtCLEtBQUssR0FBR1EsS0FBS1IsS0FBSyxTQUcxQixHQUFJQSxLQUFLLEdBQUdPLE9BQVMsRUFDakJ6QixNQUFRa0IsS0FBSyxHQUFHUSxLQUFLUixLQUFLLFFBRXpCLENBRURsQixNQURrQmtCLEtBQUssR0FBR1MsTUFBTSxFQUFHVCxLQUFLLEdBQUdPLE9BQVMsR0FBR0MsS0FBS1IsS0FBSyxJQUMvQ1UsT0FBT1YsS0FBSyxHQUFJQSxLQUFLLEdBQUdBLEtBQUssR0FBR08sT0FBUyxTQVpuRU4sU0FBV0osV0FBV2MsU0FBUyxtQkFBbUJYLEtBQUssMEJBaUIvRCxNQUFPLENBQUVsQixNQUFBQSxNQUFPbUIsTUFBQUEsT0FLcEJYLGlCQUFpQk8sWUFDYlgsZ0JBQWdCaUIsY0FBY1MsY0FBY2YsV0FBWSxDQUFDVixhQUFhTyxXQUFXQyxRQUFTUixhQUFhTyxXQUFXVyxNQUFPbEIsYUFBYU8sV0FBV0MsU0FHekpkLFFBQVFPLEtBQU9BIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL2pvaW4uanMifQ==