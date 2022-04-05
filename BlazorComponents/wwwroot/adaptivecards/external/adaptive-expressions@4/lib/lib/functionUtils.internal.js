"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const constant_1=require(167),dayjs_1=__importDefault(require(400)),utc_1=__importDefault(require(403));dayjs_1.default.extend(utc_1.default);const expressionType_1=require(192),memory_1=require(201),recognizers_text_data_types_timex_expression_1=require(222),bigInt=require(397);class InternalFunctionUtils{static parseTimexProperty(timexExpr){let parsed;if(timexExpr instanceof recognizers_text_data_types_timex_expression_1.TimexProperty)parsed=timexExpr;else if("string"==typeof timexExpr)parsed=new recognizers_text_data_types_timex_expression_1.TimexProperty(timexExpr);else if(void 0===(parsed=new recognizers_text_data_types_timex_expression_1.TimexProperty(timexExpr))||0===Object.keys(parsed).length)return{timexProperty:parsed,error:`${timexExpr} requires a TimexProperty or a string as a argument`};return{timexProperty:parsed,error:void 0}}static sortBy(isDescending){return(expression,state,options)=>{let result;const{value:oriArr,error:childrenError}=expression.children[0].tryEvaluate(state,options);let error=childrenError;if(!error)if(Array.isArray(oriArr)){const arr=oriArr.slice(0);if(1===expression.children.length)result=isDescending?arr.sort().reverse():arr.sort();else{let propertyName;({value:propertyName,error:error}=expression.children[1].tryEvaluate(state,options)),error||(propertyName=propertyName||""),result=isDescending?arr.sort(InternalFunctionUtils.sortByKey(propertyName)).reverse():arr.sort(InternalFunctionUtils.sortByKey(propertyName))}}else error=`${expression.children[0]} is not an array`;return{value:result,error:error}}}static accessIndex(instance,index){if(null==instance)return{value:void 0,error:void 0};let value,error;return Array.isArray(instance)?index>=0&&index<instance.length?value=instance[index]:error=`${index} is out of range for ${instance}`:error=`${instance} is not a collection.`,{value:value,error:error}}static verifyTimestamp(value){let error;try{const parsedData=new Date(value);Number.isNaN(parsedData.getTime())&&(error=`${value} is not a valid datetime string.`)}catch(e){error=`${value} is not a valid datetime string.`}return error}static verifyISOTimestamp(value){let error;try{const parsedData=new Date(value);Number.isNaN(parsedData.getTime())?error=`${value} is not a valid datetime string.`:parsedData.toISOString()!==value&&(error=`${value} is not a ISO format datetime string.`)}catch(e){error=`${value} is not a valid datetime string.`}return error}static ticks(timeStamp){let result;const error=this.verifyISOTimestamp(timeStamp);if(!error){const unixMilliSec=dayjs_1.default(timeStamp).utc().valueOf();result=this.UnixMilliSecondToTicksConstant.add(bigInt(unixMilliSec).times(this.MillisecondToTickConstant))}return{value:result,error:error}}static accessProperty(instance,property){if(!instance)return{value:void 0,error:void 0};let value;if(instance instanceof Map&&void 0!==instance){const instanceMap=instance;if(void 0===(value=instanceMap.get(property))){const prop=Array.from(instanceMap.keys()).find(k=>k.toLowerCase()===property.toLowerCase());void 0!==prop&&(value=instanceMap.get(prop))}}else{const prop=Object.keys(instance).find(k=>k.toLowerCase()===property.toLowerCase());void 0!==prop&&(value=instance[prop])}return{value:value,error:void 0}}static wrapGetValue(state,path,options){const result=state.getValue(path);return void 0!==result?result:void 0!==options.nullSubstitution?options.nullSubstitution(path):void 0}static parseStringOrUndefined(input){return"string"==typeof input?input:""}static isLogicTrue(instance){let result=!0;return"boolean"==typeof instance?result=instance:null==instance&&(result=!1),result}static foreach(expression,state,options){let result;const{value:instance,error:childrenError}=expression.children[0].tryEvaluate(state,options);let error=childrenError;if(instance||(error=`'${expression.children[0]}' evaluated to null.`),!error){const list=InternalFunctionUtils.convertToList(instance);list?(result=[],InternalFunctionUtils.lambdaEvaluator(expression,state,options,list,(currentItem,r,e)=>e?(error=e,!0):(result.push(r),!1))):error=`${expression.children[0]} is not a collection or structure object to run Foreach`}return{value:result,error:error}}static lambdaEvaluator(expression,state,options,list,callback){const firstChild=expression.children[1].children[0];if(!(firstChild instanceof constant_1.Constant)||"string"!=typeof firstChild.value)return;const iteratorName=firstChild.value,stackedMemory=memory_1.StackedMemory.wrap(state);for(const item of list){const currentItem=item,local=new Map([[iteratorName,item]]);stackedMemory.push(memory_1.SimpleObjectMemory.wrap(local));const{value:r,error:e}=expression.children[2].tryEvaluate(stackedMemory,options);if(stackedMemory.pop(),callback(currentItem,r,e))break}}static convertToList(instance){let arr;return Array.isArray(instance)?arr=instance:"object"==typeof instance&&(arr=[],Object.keys(instance).forEach(u=>arr.push({key:u,value:instance[u]}))),arr}static ValidateLambdaExpression(expression){if(3!==expression.children.length)throw new Error(`Lambda expression expect 3 parameters, found ${expression.children.length}`);const second=expression.children[1];if(second.type!==expressionType_1.ExpressionType.Accessor||1!==second.children.length)throw new Error(`Second parameter is not an identifier : ${second}`)}static parseUri(uri){let result,error;try{result=new URL(uri)}catch(e){error=`Invalid URI: ${uri}`}return{value:result,error:error}}static timeUnitTransformer(duration,cSharpStr){switch(cSharpStr){case"Day":return{duration:duration,tsStr:"day"};case"Week":return{duration:7*duration,tsStr:"day"};case"Second":return{duration:duration,tsStr:"second"};case"Minute":return{duration:duration,tsStr:"minute"};case"Hour":return{duration:duration,tsStr:"hour"};case"Month":return{duration:duration,tsStr:"month"};case"Year":return{duration:duration,tsStr:"year"};default:return{duration:duration,tsStr:void 0}}}static getTextEncoder(){if("undefined"!=typeof window||"undefined"!=typeof self)return new TextEncoder;return new(require(436).TextEncoder)}static getTextDecoder(code="utf-8"){if("undefined"!=typeof window||"undefined"!=typeof self)return new TextDecoder(code);return new(require(436).TextDecoder)(code)}static commonStringify(input){return null==input?"":"object"==typeof input?JSON.stringify(input).replace(/(^['"]*)/g,"").replace(/(['"]*$)/g,""):input.toString()}static sortByKey(key){return(a,b)=>a[key]>b[key]?1:b[key]>a[key]?-1:0}}InternalFunctionUtils.UnixMilliSecondToTicksConstant=bigInt("621355968000000000"),InternalFunctionUtils.MillisecondToTickConstant=bigInt("10000"),exports.InternalFunctionUtils=InternalFunctionUtils;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uVXRpbHMuaW50ZXJuYWwuanMiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwidGhpcyIsIm1vZCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjb25zdGFudF8xIiwicmVxdWlyZSIsImRheWpzXzEiLCJ1dGNfMSIsImV4dGVuZCIsImV4cHJlc3Npb25UeXBlXzEiLCJtZW1vcnlfMSIsInJlY29nbml6ZXJzX3RleHRfZGF0YV90eXBlc190aW1leF9leHByZXNzaW9uXzEiLCJiaWdJbnQiLCJJbnRlcm5hbEZ1bmN0aW9uVXRpbHMiLCJbb2JqZWN0IE9iamVjdF0iLCJ0aW1leEV4cHIiLCJwYXJzZWQiLCJUaW1leFByb3BlcnR5IiwidW5kZWZpbmVkIiwia2V5cyIsImxlbmd0aCIsInRpbWV4UHJvcGVydHkiLCJlcnJvciIsImlzRGVzY2VuZGluZyIsImV4cHJlc3Npb24iLCJzdGF0ZSIsIm9wdGlvbnMiLCJyZXN1bHQiLCJvcmlBcnIiLCJjaGlsZHJlbkVycm9yIiwiY2hpbGRyZW4iLCJ0cnlFdmFsdWF0ZSIsIkFycmF5IiwiaXNBcnJheSIsImFyciIsInNsaWNlIiwic29ydCIsInJldmVyc2UiLCJwcm9wZXJ0eU5hbWUiLCJzb3J0QnlLZXkiLCJpbnN0YW5jZSIsImluZGV4IiwicGFyc2VkRGF0YSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJlIiwidG9JU09TdHJpbmciLCJ0aW1lU3RhbXAiLCJ2ZXJpZnlJU09UaW1lc3RhbXAiLCJ1bml4TWlsbGlTZWMiLCJ1dGMiLCJ2YWx1ZU9mIiwiVW5peE1pbGxpU2Vjb25kVG9UaWNrc0NvbnN0YW50IiwiYWRkIiwidGltZXMiLCJNaWxsaXNlY29uZFRvVGlja0NvbnN0YW50IiwicHJvcGVydHkiLCJNYXAiLCJpbnN0YW5jZU1hcCIsImdldCIsInByb3AiLCJmcm9tIiwiZmluZCIsImsiLCJ0b0xvd2VyQ2FzZSIsInBhdGgiLCJnZXRWYWx1ZSIsIm51bGxTdWJzdGl0dXRpb24iLCJpbnB1dCIsImxpc3QiLCJjb252ZXJ0VG9MaXN0IiwibGFtYmRhRXZhbHVhdG9yIiwiY3VycmVudEl0ZW0iLCJyIiwicHVzaCIsImNhbGxiYWNrIiwiZmlyc3RDaGlsZCIsIkNvbnN0YW50IiwiaXRlcmF0b3JOYW1lIiwic3RhY2tlZE1lbW9yeSIsIlN0YWNrZWRNZW1vcnkiLCJ3cmFwIiwiaXRlbSIsImxvY2FsIiwiU2ltcGxlT2JqZWN0TWVtb3J5IiwicG9wIiwiZm9yRWFjaCIsInUiLCJrZXkiLCJFcnJvciIsInNlY29uZCIsInR5cGUiLCJFeHByZXNzaW9uVHlwZSIsIkFjY2Vzc29yIiwidXJpIiwiVVJMIiwiZHVyYXRpb24iLCJjU2hhcnBTdHIiLCJ0c1N0ciIsIndpbmRvdyIsInNlbGYiLCJUZXh0RW5jb2RlciIsImNvZGUiLCJUZXh0RGVjb2RlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwidG9TdHJpbmciLCJhIiwiYiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQSxDQVNBLElBQUlBLGVBQUFBLENBQW1CQyxJQUFBQSxFQUFRQSxJQUFBQSxDQUFLRCxlQUFBQSxFQUFvQixTQUFVRSxHQUFBQSxDQUFBQSxDQUM5RCxPQUFRQSxHQUFBQSxFQUFPQSxHQUFBQSxDQUFJQyxVQUFBQSxDQUFjRCxHQUFBQSxDQUFNLENBQUVFLE9BQUFBLENBQVdGLEdBQUFBLENBQUFBLENBQUFBLENBRXhERyxNQUFBQSxDQUFPQyxjQUFBQSxDQUFlQyxPQUFBQSxDQUFTLFlBQUEsQ0FBYyxDQUFFQyxLQUFBQSxDQUFBQSxDQUFPLENBQUEsQ0FBQSxDQUFBLENBQ3RELE1BQU1DLFVBQUFBLENBQWFDLE9BQUFBLENBQVEsWUFBQSxDQUFBLENBQ3JCQyxPQUFBQSxDQUFVWCxlQUFBQSxDQUFnQlUsT0FBQUEsQ0FBUSxPQUFBLENBQUEsQ0FBQSxDQUNsQ0UsS0FBQUEsQ0FBUVosZUFBQUEsQ0FBZ0JVLE9BQUFBLENBQVEsa0JBQUEsQ0FBQSxDQUFBLENBQ3RDQyxPQUFBQSxDQUFRUCxPQUFBQSxDQUFRUyxNQUFBQSxDQUFPRCxLQUFBQSxDQUFNUixPQUFBQSxDQUFBQSxDQUM3QixNQUFNVSxnQkFBQUEsQ0FBbUJKLE9BQUFBLENBQVEsa0JBQUEsQ0FBQSxDQUMzQkssUUFBQUEsQ0FBV0wsT0FBQUEsQ0FBUSxVQUFBLENBQUEsQ0FDbkJNLDhDQUFBQSxDQUFpRE4sT0FBQUEsQ0FBUSx5REFBQSxDQUFBLENBQ3pETyxNQUFBQSxDQUFTUCxPQUFBQSxDQUFRLGFBQUEsQ0FBQSxDQUl2QixNQUFNUSxxQkFBQUEsQ0FNRkMsT0FBQUEsa0JBQUFBLENBQTBCQyxTQUFBQSxDQUFBQSxDQUN0QixJQUFJQyxNQUFBQSxDQUNKLEdBQUlELFNBQUFBLFlBQXFCSiw4Q0FBQUEsQ0FBK0NNLGFBQUFBLENBQ3BFRCxNQUFBQSxDQUFTRCxTQUFBQSxDQUFBQSxLQUVSLEdBQXlCLFFBQUEsRUFBQSxPQUFkQSxTQUFBQSxDQUNaQyxNQUFBQSxDQUFTLElBQUlMLDhDQUFBQSxDQUErQ00sYUFBQUEsQ0FBY0YsU0FBQUEsQ0FBQUEsQ0FBQUEsS0FJMUUsR0FBQSxLQUFlRyxDQUFBQSxJQURmRixNQUFBQSxDQUFTLElBQUlMLDhDQUFBQSxDQUErQ00sYUFBQUEsQ0FBY0YsU0FBQUEsQ0FBQUEsQ0FBQUEsRUFDZixDQUFBLEdBQS9CZixNQUFBQSxDQUFPbUIsSUFBQUEsQ0FBS0gsTUFBQUEsQ0FBQUEsQ0FBUUksTUFBQUEsQ0FDNUMsTUFBTyxDQUNIQyxhQUFBQSxDQUFlTCxNQUFBQSxDQUNmTSxLQUFBQSxDQUFBQSxDQUFBQSxFQUFVUCxTQUFBQSxDQUFBQSxtREFBQUEsQ0FBQUEsQ0FBQUEsQ0FJdEIsTUFBTyxDQUFFTSxhQUFBQSxDQUFlTCxNQUFBQSxDQUFRTSxLQUFBQSxDQUFBQSxLQUFPSixDQUFBQSxDQUFBQSxDQU0zQ0osT0FBQUEsTUFBQUEsQ0FBY1MsWUFBQUEsQ0FBQUEsQ0FDVixNQUFPLENBQUNDLFVBQUFBLENBQVlDLEtBQUFBLENBQU9DLE9BQUFBLEdBQUFBLENBQ3ZCLElBQUlDLE1BQUFBLENBQ0osS0FBQSxDQUFReEIsS0FBQUEsQ0FBT3lCLE1BQUFBLENBQVFOLEtBQUFBLENBQU9PLGFBQUFBLENBQUFBLENBQWtCTCxVQUFBQSxDQUFXTSxRQUFBQSxDQUFTLENBQUEsQ0FBQSxDQUFHQyxXQUFBQSxDQUFZTixLQUFBQSxDQUFPQyxPQUFBQSxDQUFBQSxDQUMxRixJQUFJSixLQUFBQSxDQUFRTyxhQUFBQSxDQUNaLEdBQUEsQ0FBS1AsS0FBQUEsQ0FDRCxHQUFJVSxLQUFBQSxDQUFNQyxPQUFBQSxDQUFRTCxNQUFBQSxDQUFBQSxDQUFTLENBRXZCLE1BQU1NLEdBQUFBLENBQU1OLE1BQUFBLENBQU9PLEtBQUFBLENBQU0sQ0FBQSxDQUFBLENBQ3pCLEdBQW1DLENBQUEsR0FBL0JYLFVBQUFBLENBQVdNLFFBQUFBLENBQVNWLE1BQUFBLENBRWhCTyxNQUFBQSxDQURBSixZQUFBQSxDQUNTVyxHQUFBQSxDQUFJRSxJQUFBQSxFQUFBQSxDQUFPQyxPQUFBQSxFQUFBQSxDQUdYSCxHQUFBQSxDQUFJRSxJQUFBQSxFQUFBQSxDQUFBQSxJQUdoQixDQUNELElBQUlFLFlBQUFBLENBQUFBLENBQUFBLENBQ0RuQyxLQUFBQSxDQUFPbUMsWUFBQUEsQ0FBY2hCLEtBQUFBLENBQUFBLEtBQUFBLENBQUFBLENBQVVFLFVBQUFBLENBQVdNLFFBQUFBLENBQVMsQ0FBQSxDQUFBLENBQUdDLFdBQUFBLENBQVlOLEtBQUFBLENBQU9DLE9BQUFBLENBQUFBLEVBQ3ZFSixLQUFBQSxHQUNEZ0IsWUFBQUEsQ0FBZUEsWUFBQUEsRUFBZ0IsRUFBQSxDQUFBLENBRy9CWCxNQUFBQSxDQURBSixZQUFBQSxDQUNTVyxHQUFBQSxDQUFJRSxJQUFBQSxDQUFLdkIscUJBQUFBLENBQXNCMEIsU0FBQUEsQ0FBVUQsWUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBZUQsT0FBQUEsRUFBQUEsQ0FHeERILEdBQUFBLENBQUlFLElBQUFBLENBQUt2QixxQkFBQUEsQ0FBc0IwQixTQUFBQSxDQUFVRCxZQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxLQUsxRGhCLEtBQUFBLENBQUFBLENBQUFBLEVBQVdFLFVBQUFBLENBQVdNLFFBQUFBLENBQVMsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUd2QyxNQUFPLENBQUUzQixLQUFBQSxDQUFPd0IsTUFBQUEsQ0FBUUwsS0FBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsQ0FBQUEsQ0FTaENSLE9BQUFBLFdBQUFBLENBQW1CMEIsUUFBQUEsQ0FBVUMsS0FBQUEsQ0FBQUEsQ0FFekIsR0FBZ0IsSUFBQSxFQUFaRCxRQUFBQSxDQUNBLE1BQU8sQ0FBRXJDLEtBQUFBLENBQUFBLEtBQU9lLENBQUFBLENBQVdJLEtBQUFBLENBQUFBLEtBQU9KLENBQUFBLENBQUFBLENBRXRDLElBQUlmLEtBQUFBLENBQ0FtQixLQUFBQSxDQVlKLE9BWElVLEtBQUFBLENBQU1DLE9BQUFBLENBQVFPLFFBQUFBLENBQUFBLENBQ1ZDLEtBQUFBLEVBQVMsQ0FBQSxFQUFLQSxLQUFBQSxDQUFRRCxRQUFBQSxDQUFTcEIsTUFBQUEsQ0FDL0JqQixLQUFBQSxDQUFRcUMsUUFBQUEsQ0FBU0MsS0FBQUEsQ0FBQUEsQ0FHakJuQixLQUFBQSxDQUFBQSxDQUFBQSxFQUFXbUIsS0FBQUEsQ0FBQUEscUJBQUFBLEVBQTZCRCxRQUFBQSxDQUFBQSxDQUFBQSxDQUk1Q2xCLEtBQUFBLENBQUFBLENBQUFBLEVBQVdrQixRQUFBQSxDQUFBQSxxQkFBQUEsQ0FBQUEsQ0FFUixDQUFFckMsS0FBQUEsQ0FBQUEsS0FBQUEsQ0FBT21CLEtBQUFBLENBQUFBLEtBQUFBLENBQUFBLENBT3BCUixPQUFBQSxlQUFBQSxDQUF1QlgsS0FBQUEsQ0FBQUEsQ0FDbkIsSUFBSW1CLEtBQUFBLENBQ0osR0FBQSxDQUNJLE1BQU1vQixVQUFBQSxDQUFhLElBQUlDLElBQUFBLENBQUt4QyxLQUFBQSxDQUFBQSxDQUN4QnlDLE1BQUFBLENBQU9DLEtBQUFBLENBQU1ILFVBQUFBLENBQVdJLE9BQUFBLEVBQUFBLENBQUFBLEdBQ3hCeEIsS0FBQUEsQ0FBQUEsQ0FBQUEsRUFBV25CLEtBQUFBLENBQUFBLGdDQUFBQSxDQUFBQSxDQUFBQSxDQUduQixNQUFPNEMsQ0FBQUEsQ0FBQUEsQ0FDSHpCLEtBQUFBLENBQUFBLENBQUFBLEVBQVduQixLQUFBQSxDQUFBQSxnQ0FBQUEsQ0FBQUEsQ0FFZixPQUFPbUIsS0FBQUEsQ0FPWFIsT0FBQUEsa0JBQUFBLENBQTBCWCxLQUFBQSxDQUFBQSxDQUN0QixJQUFJbUIsS0FBQUEsQ0FDSixHQUFBLENBQ0ksTUFBTW9CLFVBQUFBLENBQWEsSUFBSUMsSUFBQUEsQ0FBS3hDLEtBQUFBLENBQUFBLENBQ3hCeUMsTUFBQUEsQ0FBT0MsS0FBQUEsQ0FBTUgsVUFBQUEsQ0FBV0ksT0FBQUEsRUFBQUEsQ0FBQUEsQ0FDeEJ4QixLQUFBQSxDQUFBQSxDQUFBQSxFQUFXbkIsS0FBQUEsQ0FBQUEsZ0NBQUFBLENBQUFBLENBRU51QyxVQUFBQSxDQUFXTSxXQUFBQSxFQUFBQSxHQUFrQjdDLEtBQUFBLEdBQ2xDbUIsS0FBQUEsQ0FBQUEsQ0FBQUEsRUFBV25CLEtBQUFBLENBQUFBLHFDQUFBQSxDQUFBQSxDQUFBQSxDQUduQixNQUFPNEMsQ0FBQUEsQ0FBQUEsQ0FDSHpCLEtBQUFBLENBQUFBLENBQUFBLEVBQVduQixLQUFBQSxDQUFBQSxnQ0FBQUEsQ0FBQUEsQ0FFZixPQUFPbUIsS0FBQUEsQ0FNWFIsT0FBQUEsS0FBQUEsQ0FBYW1DLFNBQUFBLENBQUFBLENBQ1QsSUFBSXRCLE1BQUFBLENBQ0osTUFBTUwsS0FBQUEsQ0FBUTFCLElBQUFBLENBQUtzRCxrQkFBQUEsQ0FBbUJELFNBQUFBLENBQUFBLENBQ3RDLEdBQUEsQ0FBSzNCLEtBQUFBLENBQU8sQ0FDUixNQUFNNkIsWUFBQUEsQ0FBZTdDLE9BQUFBLENBQVFQLE9BQUFBLENBQVFrRCxTQUFBQSxDQUFBQSxDQUFXRyxHQUFBQSxFQUFBQSxDQUFNQyxPQUFBQSxFQUFBQSxDQUN0RDFCLE1BQUFBLENBQVMvQixJQUFBQSxDQUFLMEQsOEJBQUFBLENBQStCQyxHQUFBQSxDQUFJM0MsTUFBQUEsQ0FBT3VDLFlBQUFBLENBQUFBLENBQWNLLEtBQUFBLENBQU01RCxJQUFBQSxDQUFLNkQseUJBQUFBLENBQUFBLENBQUFBLENBRXJGLE1BQU8sQ0FBRXRELEtBQUFBLENBQU93QixNQUFBQSxDQUFRTCxLQUFBQSxDQUFBQSxLQUFBQSxDQUFBQSxDQVE1QlIsT0FBQUEsY0FBQUEsQ0FBc0IwQixRQUFBQSxDQUFVa0IsUUFBQUEsQ0FBQUEsQ0FFNUIsR0FBQSxDQUFLbEIsUUFBQUEsQ0FDRCxNQUFPLENBQUVyQyxLQUFBQSxDQUFBQSxLQUFPZSxDQUFBQSxDQUFXSSxLQUFBQSxDQUFBQSxLQUFPSixDQUFBQSxDQUFBQSxDQUV0QyxJQUFJZixLQUFBQSxDQUVKLEdBQUlxQyxRQUFBQSxZQUFvQm1CLEdBQUFBLEVBQUFBLEtBQW9CekMsQ0FBQUEsR0FBYnNCLFFBQUFBLENBQXdCLENBQ25ELE1BQU1vQixXQUFBQSxDQUFjcEIsUUFBQUEsQ0FFcEIsR0FBQSxLQUFjdEIsQ0FBQUEsSUFEZGYsS0FBQUEsQ0FBUXlELFdBQUFBLENBQVlDLEdBQUFBLENBQUlILFFBQUFBLENBQUFBLENBQUFBLENBQ0MsQ0FDckIsTUFBTUksSUFBQUEsQ0FBTzlCLEtBQUFBLENBQU0rQixJQUFBQSxDQUFLSCxXQUFBQSxDQUFZekMsSUFBQUEsRUFBQUEsQ0FBQUEsQ0FBUTZDLElBQUFBLENBQU1DLENBQUFBLEVBQU1BLENBQUFBLENBQUVDLFdBQUFBLEVBQUFBLEdBQWtCUixRQUFBQSxDQUFTUSxXQUFBQSxFQUFBQSxDQUFBQSxDQUFBQSxLQUN4RWhELENBQUFBLEdBQVQ0QyxJQUFBQSxHQUNBM0QsS0FBQUEsQ0FBUXlELFdBQUFBLENBQVlDLEdBQUFBLENBQUlDLElBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLElBSS9CLENBQ0QsTUFBTUEsSUFBQUEsQ0FBTzlELE1BQUFBLENBQU9tQixJQUFBQSxDQUFLcUIsUUFBQUEsQ0FBQUEsQ0FBVXdCLElBQUFBLENBQU1DLENBQUFBLEVBQU1BLENBQUFBLENBQUVDLFdBQUFBLEVBQUFBLEdBQWtCUixRQUFBQSxDQUFTUSxXQUFBQSxFQUFBQSxDQUFBQSxDQUFBQSxLQUMvRGhELENBQUFBLEdBQVQ0QyxJQUFBQSxHQUNBM0QsS0FBQUEsQ0FBUXFDLFFBQUFBLENBQVNzQixJQUFBQSxDQUFBQSxDQUFBQSxDQUd6QixNQUFPLENBQUUzRCxLQUFBQSxDQUFBQSxLQUFBQSxDQUFPbUIsS0FBQUEsQ0FBQUEsS0FqQlpBLENBQUFBLENBQUFBLENBeUJSUixPQUFBQSxZQUFBQSxDQUFvQlcsS0FBQUEsQ0FBTzBDLElBQUFBLENBQU16QyxPQUFBQSxDQUFBQSxDQUM3QixNQUFNQyxNQUFBQSxDQUFTRixLQUFBQSxDQUFNMkMsUUFBQUEsQ0FBU0QsSUFBQUEsQ0FBQUEsQ0FDOUIsT0FBQSxLQUFlakQsQ0FBQUEsR0FBWFMsTUFBQUEsQ0FDT0EsTUFBQUEsQ0FBQUEsS0FFc0JULENBQUFBLEdBQTdCUSxPQUFBQSxDQUFRMkMsZ0JBQUFBLENBQ0QzQyxPQUFBQSxDQUFRMkMsZ0JBQUFBLENBQWlCRixJQUFBQSxDQUFBQSxDQUFBQSxLQURwQyxDQUFBLENBU0pyRCxPQUFBQSxzQkFBQUEsQ0FBOEJ3RCxLQUFBQSxDQUFBQSxDQUMxQixNQUFxQixRQUFBLEVBQUEsT0FBVkEsS0FBQUEsQ0FDQUEsS0FBQUEsQ0FHQSxFQUFBLENBUWZ4RCxPQUFBQSxXQUFBQSxDQUFtQjBCLFFBQUFBLENBQUFBLENBQ2YsSUFBSWIsTUFBQUEsQ0FBQUEsQ0FBUyxDQUFBLENBT2IsTUFOd0IsU0FBQSxFQUFBLE9BQWJhLFFBQUFBLENBQ1BiLE1BQUFBLENBQVNhLFFBQUFBLENBRVEsSUFBQSxFQUFaQSxRQUFBQSxHQUNMYixNQUFBQSxDQUFBQSxDQUFTLENBQUEsQ0FBQSxDQUVOQSxNQUFBQSxDQVFYYixPQUFBQSxPQUFBQSxDQUFlVSxVQUFBQSxDQUFZQyxLQUFBQSxDQUFPQyxPQUFBQSxDQUFBQSxDQUM5QixJQUFJQyxNQUFBQSxDQUNKLEtBQUEsQ0FBUXhCLEtBQUFBLENBQU9xQyxRQUFBQSxDQUFVbEIsS0FBQUEsQ0FBT08sYUFBQUEsQ0FBQUEsQ0FBa0JMLFVBQUFBLENBQVdNLFFBQUFBLENBQVMsQ0FBQSxDQUFBLENBQUdDLFdBQUFBLENBQVlOLEtBQUFBLENBQU9DLE9BQUFBLENBQUFBLENBQzVGLElBQUlKLEtBQUFBLENBQVFPLGFBQUFBLENBSVosR0FIS1csUUFBQUEsR0FDRGxCLEtBQUFBLENBQUFBLENBQUFBLENBQUFBLEVBQVlFLFVBQUFBLENBQVdNLFFBQUFBLENBQVMsQ0FBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBLENBQUEsQ0FFL0JSLEtBQUFBLENBQU8sQ0FDUixNQUFNaUQsSUFBQUEsQ0FBTzFELHFCQUFBQSxDQUFzQjJELGFBQUFBLENBQWNoQyxRQUFBQSxDQUFBQSxDQUM1QytCLElBQUFBLEVBSUQ1QyxNQUFBQSxDQUFTLEVBQUEsQ0FDVGQscUJBQUFBLENBQXNCNEQsZUFBQUEsQ0FBZ0JqRCxVQUFBQSxDQUFZQyxLQUFBQSxDQUFPQyxPQUFBQSxDQUFTNkMsSUFBQUEsQ0FBTSxDQUFDRyxXQUFBQSxDQUFhQyxDQUFBQSxDQUFHNUIsQ0FBQUEsR0FDakZBLENBQUFBLEVBQ0F6QixLQUFBQSxDQUFReUIsQ0FBQUEsQ0FBQUEsQ0FDRCxDQUFBLEdBR1BwQixNQUFBQSxDQUFPaUQsSUFBQUEsQ0FBS0QsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FDTCxDQUFBLENBQUEsQ0FBQSxFQVhmckQsS0FBQUEsQ0FBQUEsQ0FBQUEsRUFBV0UsVUFBQUEsQ0FBV00sUUFBQUEsQ0FBUyxDQUFBLENBQUEsQ0FBQSx1REFBQSxDQUFBLENBZ0J2QyxNQUFPLENBQUUzQixLQUFBQSxDQUFPd0IsTUFBQUEsQ0FBUUwsS0FBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsQ0FVNUJSLE9BQUFBLGVBQUFBLENBQXVCVSxVQUFBQSxDQUFZQyxLQUFBQSxDQUFPQyxPQUFBQSxDQUFTNkMsSUFBQUEsQ0FBTU0sUUFBQUEsQ0FBQUEsQ0FDckQsTUFBTUMsVUFBQUEsQ0FBYXRELFVBQUFBLENBQVdNLFFBQUFBLENBQVMsQ0FBQSxDQUFBLENBQUdBLFFBQUFBLENBQVMsQ0FBQSxDQUFBLENBQ25ELEdBQUEsRUFBTWdELFVBQUFBLFlBQXNCMUUsVUFBQUEsQ0FBVzJFLFFBQUFBLENBQUFBLEVBQXlDLFFBQUEsRUFBQSxPQUFyQkQsVUFBQUEsQ0FBVzNFLEtBQUFBLENBQ2xFLE9BRUosTUFBTTZFLFlBQUFBLENBQWVGLFVBQUFBLENBQVczRSxLQUFBQSxDQUMxQjhFLGFBQUFBLENBQWdCdkUsUUFBQUEsQ0FBU3dFLGFBQUFBLENBQWNDLElBQUFBLENBQUsxRCxLQUFBQSxDQUFBQSxDQUNsRCxJQUFLLE1BQU0yRCxJQUFBQSxJQUFRYixJQUFBQSxDQUFNLENBQ3JCLE1BQU1HLFdBQUFBLENBQWNVLElBQUFBLENBQ2RDLEtBQUFBLENBQVEsSUFBSTFCLEdBQUFBLENBQUksQ0FBQyxDQUFDcUIsWUFBQUEsQ0FBY0ksSUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FFdENILGFBQUFBLENBQWNMLElBQUFBLENBQUtsRSxRQUFBQSxDQUFTNEUsa0JBQUFBLENBQW1CSCxJQUFBQSxDQUFLRSxLQUFBQSxDQUFBQSxDQUFBQSxDQUNwRCxLQUFBLENBQVFsRixLQUFBQSxDQUFPd0UsQ0FBQUEsQ0FBR3JELEtBQUFBLENBQU95QixDQUFBQSxDQUFBQSxDQUFNdkIsVUFBQUEsQ0FBV00sUUFBQUEsQ0FBUyxDQUFBLENBQUEsQ0FBR0MsV0FBQUEsQ0FBWWtELGFBQUFBLENBQWV2RCxPQUFBQSxDQUFBQSxDQUdqRixHQUZBdUQsYUFBQUEsQ0FBY00sR0FBQUEsRUFBQUEsQ0FDTVYsUUFBQUEsQ0FBU0gsV0FBQUEsQ0FBYUMsQ0FBQUEsQ0FBRzVCLENBQUFBLENBQUFBLENBRXpDLEtBQUEsQ0FBQSxDQVdaakMsT0FBQUEsYUFBQUEsQ0FBcUIwQixRQUFBQSxDQUFBQSxDQUNqQixJQUFJTixHQUFBQSxDQVFKLE9BUElGLEtBQUFBLENBQU1DLE9BQUFBLENBQVFPLFFBQUFBLENBQUFBLENBQ2ROLEdBQUFBLENBQU1NLFFBQUFBLENBRW1CLFFBQUEsRUFBQSxPQUFiQSxRQUFBQSxHQUNaTixHQUFBQSxDQUFNLEVBQUEsQ0FDTmxDLE1BQUFBLENBQU9tQixJQUFBQSxDQUFLcUIsUUFBQUEsQ0FBQUEsQ0FBVWdELE9BQUFBLENBQVNDLENBQUFBLEVBQU12RCxHQUFBQSxDQUFJMEMsSUFBQUEsQ0FBSyxDQUFFYyxHQUFBQSxDQUFLRCxDQUFBQSxDQUFHdEYsS0FBQUEsQ0FBT3FDLFFBQUFBLENBQVNpRCxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUVyRXZELEdBQUFBLENBTVhwQixPQUFBQSx3QkFBQUEsQ0FBZ0NVLFVBQUFBLENBQUFBLENBQzVCLEdBQW1DLENBQUEsR0FBL0JBLFVBQUFBLENBQVdNLFFBQUFBLENBQVNWLE1BQUFBLENBQ3BCLE1BQU0sSUFBSXVFLEtBQUFBLENBQUFBLENBQUFBLDZDQUFBQSxFQUFzRG5FLFVBQUFBLENBQVdNLFFBQUFBLENBQVNWLE1BQUFBLENBQUFBLENBQUFBLENBQUFBLENBRXhGLE1BQU13RSxNQUFBQSxDQUFTcEUsVUFBQUEsQ0FBV00sUUFBQUEsQ0FBUyxDQUFBLENBQUEsQ0FDbkMsR0FBTThELE1BQUFBLENBQU9DLElBQUFBLEdBQVNwRixnQkFBQUEsQ0FBaUJxRixjQUFBQSxDQUFlQyxRQUFBQSxFQUF1QyxDQUFBLEdBQTNCSCxNQUFBQSxDQUFPOUQsUUFBQUEsQ0FBU1YsTUFBQUEsQ0FDOUUsTUFBTSxJQUFJdUUsS0FBQUEsQ0FBQUEsQ0FBQUEsd0NBQUFBLEVBQWlEQyxNQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQU9uRTlFLE9BQUFBLFFBQUFBLENBQWdCa0YsR0FBQUEsQ0FBQUEsQ0FDWixJQUFJckUsTUFBQUEsQ0FDQUwsS0FBQUEsQ0FDSixHQUFBLENBQ0lLLE1BQUFBLENBQVMsSUFBSXNFLEdBQUFBLENBQUlELEdBQUFBLENBQUFBLENBRXJCLE1BQU9qRCxDQUFBQSxDQUFBQSxDQUNIekIsS0FBQUEsQ0FBQUEsQ0FBQUEsYUFBQUEsRUFBd0IwRSxHQUFBQSxDQUFBQSxDQUFBQSxDQUU1QixNQUFPLENBQUU3RixLQUFBQSxDQUFPd0IsTUFBQUEsQ0FBUUwsS0FBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsQ0FPNUJSLE9BQUFBLG1CQUFBQSxDQUEyQm9GLFFBQUFBLENBQVVDLFNBQUFBLENBQUFBLENBQ2pDLE9BQVFBLFNBQUFBLEVBQ0osSUFBSyxLQUFBLENBQ0QsTUFBTyxDQUFFRCxRQUFBQSxDQUFBQSxRQUFBQSxDQUFVRSxLQUFBQSxDQUFPLEtBQUEsQ0FBQSxDQUM5QixJQUFLLE1BQUEsQ0FDRCxNQUFPLENBQUVGLFFBQUFBLENBQXFCLENBQUEsQ0FBWEEsUUFBQUEsQ0FBY0UsS0FBQUEsQ0FBTyxLQUFBLENBQUEsQ0FDNUMsSUFBSyxRQUFBLENBQ0QsTUFBTyxDQUFFRixRQUFBQSxDQUFBQSxRQUFBQSxDQUFVRSxLQUFBQSxDQUFPLFFBQUEsQ0FBQSxDQUM5QixJQUFLLFFBQUEsQ0FDRCxNQUFPLENBQUVGLFFBQUFBLENBQUFBLFFBQUFBLENBQVVFLEtBQUFBLENBQU8sUUFBQSxDQUFBLENBQzlCLElBQUssTUFBQSxDQUNELE1BQU8sQ0FBRUYsUUFBQUEsQ0FBQUEsUUFBQUEsQ0FBVUUsS0FBQUEsQ0FBTyxNQUFBLENBQUEsQ0FDOUIsSUFBSyxPQUFBLENBQ0QsTUFBTyxDQUFFRixRQUFBQSxDQUFBQSxRQUFBQSxDQUFVRSxLQUFBQSxDQUFPLE9BQUEsQ0FBQSxDQUM5QixJQUFLLE1BQUEsQ0FDRCxNQUFPLENBQUVGLFFBQUFBLENBQUFBLFFBQUFBLENBQVVFLEtBQUFBLENBQU8sTUFBQSxDQUFBLENBQzlCLFFBQ0ksTUFBTyxDQUFFRixRQUFBQSxDQUFBQSxRQUFBQSxDQUFVRSxLQUFBQSxDQUFBQSxLQUFPbEYsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FNdENKLE9BQUFBLGNBQUFBLEVBQUFBLENBQ0ksR0FBc0IsV0FBQSxFQUFBLE9BQVh1RixNQUFBQSxFQUEwQyxXQUFBLEVBQUEsT0FBVEMsSUFBQUEsQ0FDeEMsT0FBTyxJQUFJQyxXQUFBQSxDQUlmLE9BQU8sSUFETWxHLE9BQUFBLENBQVEsTUFBQSxDQUFBLENBQ0xrRyxXQUFBQSxDQUFBQSxDQUtwQnpGLE9BQUFBLGNBQUFBLENBQXNCMEYsSUFBQUEsQ0FBTyxPQUFBLENBQUEsQ0FDekIsR0FBc0IsV0FBQSxFQUFBLE9BQVhILE1BQUFBLEVBQTBDLFdBQUEsRUFBQSxPQUFUQyxJQUFBQSxDQUN4QyxPQUFPLElBQUlHLFdBQUFBLENBQVlELElBQUFBLENBQUFBLENBSTNCLE9BQU8sSUFETW5HLE9BQUFBLENBQVEsTUFBQSxDQUFBLENBQ0xvRyxXQUFBQSxFQUFZRCxJQUFBQSxDQUFBQSxDQU1oQzFGLE9BQUFBLGVBQUFBLENBQXVCd0QsS0FBQUEsQ0FBQUEsQ0FDbkIsT0FBYSxJQUFBLEVBQVRBLEtBQUFBLENBQ08sRUFBQSxDQUVVLFFBQUEsRUFBQSxPQUFWQSxLQUFBQSxDQUNBb0MsSUFBQUEsQ0FBS0MsU0FBQUEsQ0FBVXJDLEtBQUFBLENBQUFBLENBQ2pCc0MsT0FBQUEsQ0FBUSxXQUFBLENBQWEsRUFBQSxDQUFBLENBQ3JCQSxPQUFBQSxDQUFRLFdBQUEsQ0FBYSxFQUFBLENBQUEsQ0FHbkJ0QyxLQUFBQSxDQUFNdUMsUUFBQUEsRUFBQUEsQ0FNckIvRixPQUFBQSxTQUFBQSxDQUFpQjRFLEdBQUFBLENBQUFBLENBQ2IsTUFBTyxDQUFDb0IsQ0FBQUEsQ0FBR0MsQ0FBQUEsR0FBT0QsQ0FBQUEsQ0FBRXBCLEdBQUFBLENBQUFBLENBQU9xQixDQUFBQSxDQUFFckIsR0FBQUEsQ0FBQUEsQ0FBTyxDQUFBLENBQUlxQixDQUFBQSxDQUFFckIsR0FBQUEsQ0FBQUEsQ0FBT29CLENBQUFBLENBQUVwQixHQUFBQSxDQUFBQSxDQUFBQSxDQUFRLENBQUEsQ0FBSSxDQUFBLENBQUEsQ0FNdkU3RSxxQkFBQUEsQ0FBc0J5Qyw4QkFBQUEsQ0FBaUMxQyxNQUFBQSxDQUFPLG9CQUFBLENBQUEsQ0FJOURDLHFCQUFBQSxDQUFzQjRDLHlCQUFBQSxDQUE0QjdDLE1BQUFBLENBQU8sT0FBQSxDQUFBLENBQ3pEVixPQUFBQSxDQUFRVyxxQkFBQUEsQ0FBd0JBLHFCQUFBQSxDQUFBQSIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19