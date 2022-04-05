"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const extensions_1=require(193),functionUtils_internal_1=require(195);class SimpleObjectMemory{constructor(memory){this.memory=void 0,this.memory=memory}static wrap(obj){return extensions_1.Extensions.isMemoryInterface(obj)?obj:new SimpleObjectMemory(obj)}getValue(path){if(void 0===this.memory||0===path.length)return;const parts=path.split(/[.\[\]]+/).filter(u=>void 0!==u&&""!==u).map(u=>u.startsWith('"')&&u.endsWith('"')||u.startsWith("'")&&u.endsWith("'")?u.substr(1,u.length-2):u);let value,curScope=this.memory;for(const part of parts){let error;const idx=parseInt(part);if(!isNaN(idx)&&Array.isArray(curScope)?({value:value,error:error}=functionUtils_internal_1.InternalFunctionUtils.accessIndex(curScope,idx)):({value:value,error:error}=functionUtils_internal_1.InternalFunctionUtils.accessProperty(curScope,part)),error)return;curScope=value}return value}setValue(path,input){if(void 0===this.memory)return;const parts=path.split(/[.[\]]+/).filter(u=>void 0!==u&&""!==u).map(u=>u.startsWith('"')&&u.endsWith('"')||u.startsWith("'")&&u.endsWith("'")?u.substr(1,u.length-2):u);let curScope=this.memory,curPath="",error=void 0;for(let i=0;i<parts.length-1;i++){const idx=parseInt(parts[i]);if(!isNaN(idx)&&Array.isArray(curScope)?(curPath=`[${parts[i]}]`,({value:curScope,error:error}=functionUtils_internal_1.InternalFunctionUtils.accessIndex(curScope,idx))):(curPath=`.${parts[i]}`,({value:curScope,error:error}=functionUtils_internal_1.InternalFunctionUtils.accessProperty(curScope,parts[i]))),error)return;if(void 0===curScope)return void(curPath=curPath.replace(/(^\.*)/g,""))}const idx=parseInt(parts[parts.length-1]);if(isNaN(idx)){if(error=this.setProperty(curScope,parts[parts.length-1],input).error)return}else if(Array.isArray(curScope)?idx>curScope.length?error=`${idx} index out of range`:idx===curScope.length?curScope.push(input):curScope[idx]=input:error="set value for an index to a non-list object",error)return}version(){return this.toString()}toString(){return JSON.stringify(this.memory,this.getCircularReplacer())}getCircularReplacer(){const seen=new WeakSet;return(_key,value)=>{if("object"==typeof value&&value){if(seen.has(value))return;seen.add(value)}return value}}setProperty(instance,property,value){const result=value;return instance instanceof Map?instance.set(property,value):instance[property]=value,{value:result,error:void 0}}}exports.SimpleObjectMemory=SimpleObjectMemory;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZU9iamVjdE1lbW9yeS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4dGVuc2lvbnNfMSIsInJlcXVpcmUiLCJmdW5jdGlvblV0aWxzX2ludGVybmFsXzEiLCJTaW1wbGVPYmplY3RNZW1vcnkiLCJbb2JqZWN0IE9iamVjdF0iLCJtZW1vcnkiLCJ0aGlzIiwidW5kZWZpbmVkIiwib2JqIiwiRXh0ZW5zaW9ucyIsImlzTWVtb3J5SW50ZXJmYWNlIiwicGF0aCIsImxlbmd0aCIsInBhcnRzIiwic3BsaXQiLCJmaWx0ZXIiLCJ1IiwibWFwIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwic3Vic3RyIiwiY3VyU2NvcGUiLCJwYXJ0IiwiZXJyb3IiLCJpZHgiLCJwYXJzZUludCIsImlzTmFOIiwiQXJyYXkiLCJpc0FycmF5IiwiSW50ZXJuYWxGdW5jdGlvblV0aWxzIiwiYWNjZXNzSW5kZXgiLCJhY2Nlc3NQcm9wZXJ0eSIsImlucHV0IiwiY3VyUGF0aCIsImkiLCJyZXBsYWNlIiwic2V0UHJvcGVydHkiLCJwdXNoIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0Q2lyY3VsYXJSZXBsYWNlciIsInNlZW4iLCJXZWFrU2V0IiwiX2tleSIsImhhcyIsImFkZCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJyZXN1bHQiLCJNYXAiLCJzZXQiXSwibWFwcGluZ3MiOiJBQUFBLGFBQ0FBLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBRXRELE1BQU1DLGFBQWVDLFFBQVEsaUJBQ3ZCQyx5QkFBMkJELFFBQVEsNkJBV3pDLE1BQU1FLG1CQU1GQyxZQUFZQyxRQUNSQyxLQUFLRCxZQUFTRSxFQUNkRCxLQUFLRCxPQUFTQSxPQU9sQkQsWUFBWUksS0FDUixPQUFJUixhQUFhUyxXQUFXQyxrQkFBa0JGLEtBQ25DQSxJQUVKLElBQUlMLG1CQUFtQkssS0FPbENKLFNBQVNPLE1B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