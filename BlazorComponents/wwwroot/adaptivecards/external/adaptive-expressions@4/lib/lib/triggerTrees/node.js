"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const clause_1=require(215),relationshipType_1=require(219);var Operation;!function(Operation){Operation.none="none",Operation.found="found",Operation.added="added",Operation.removed="removed",Operation.inserted="inserted"}(Operation||(Operation={}));exports.Node=class{constructor(clause,tree,trigger){this._allTriggers=[],this._triggers=[],this._specializations=[],this.clause=new clause_1.Clause(clause),this.tree=tree,trigger&&(this._allTriggers.push(trigger),this._triggers.push(trigger))}get triggers(){return this._triggers}get allTriggers(){return this._allTriggers}get specializations(){return this._specializations}toString(builder=[],indent=0){return this.clause.toString(builder,indent)}relationship(other){return this.clause.relationship(other.clause,this.tree.comparers)}matches(state){const matches=new Set;return this._matches(state,matches,new Map),Array.from(matches)}addNode(triggerNode){return this._addNode(triggerNode,new Map)===Operation.added}removeTrigger(trigger){return this._removeTrigger(trigger,new Set)}_addNode(triggerNode,ops){if(ops.has(this))return Operation.none;let op=Operation.none;const trigger=triggerNode.triggers[0];switch(this.relationship(triggerNode)){case relationshipType_1.RelationshipType.equal:const found=void 0!==this._allTriggers.find(existing=>null!=trigger.action&&trigger.action===existing.action);if(op=Operation.found,!found){this._allTriggers.push(trigger);let add=!0;for(let i=0;i<this._triggers.length;){const existing=this._triggers[i],reln=trigger.relationship(existing,this.tree.comparers);if(reln===relationshipType_1.RelationshipType.generalizes){add=!1;break}reln===relationshipType_1.RelationshipType.specializes?this._triggers.splice(i,1):++i}add&&this._triggers.push(trigger),op=Operation.added}break;case relationshipType_1.RelationshipType.incomparable:for(const child of this._specializations)child._addNode(triggerNode,ops);break;case relationshipType_1.RelationshipType.specializes:triggerNode._addSpecialization(this),op=Operation.inserted;break;case relationshipType_1.RelationshipType.generalizes:let removals,foundOne=!1;for(let i=0;i<this._specializations.length;i++){const child=this._specializations[i],childOp=child._addNode(triggerNode,ops);childOp!=Operation.none&&(foundOne=!0,childOp===Operation.inserted?(removals||(removals=[]),removals.push(child),op=Operation.added):op=childOp)}if(removals){for(const removal of removals){const removed=this._specializations.findIndex(item=>item===removal);removed>=0&&this._specializations.splice(removed,1)}this._specializations.push(triggerNode)}foundOne||(this._specializations.push(triggerNode),op=Operation.added)}return ops.set(this,op),op}_matches(state,matches,matched){let found=matched.get(this);if(found)return!0;found=!1;for(const child of this._specializations)child._matches(state,matches,matched)&&(found=!0);if(!found){const{value:match,error:error}=this.clause.tryEvaluate(state);if(!error&&match)for(const trigger of this.triggers)trigger.matches(this.clause,state)&&(matches.add(trigger),found=!0)}return matched.set(this,found),found}_removeTrigger(trigger,visited){if(visited.has(this))return!1;visited.add(this);let removed=!1;const allTriggerIndex=this._allTriggers.findIndex(item=>item===trigger);if(allTriggerIndex>=0){this._allTriggers.splice(allTriggerIndex,1),removed=!0;const triggerIndex=this._triggers.findIndex(item=>item===trigger);if(triggerIndex>=0){this._triggers.splice(triggerIndex,1);for(const candidate of this._allTriggers){let add=!0;for(const existing of this._triggers){const reln=candidate.relationship(existing,this.tree.comparers);if(reln===relationshipType_1.RelationshipType.equal||reln===relationshipType_1.RelationshipType.generalizes){add=!1;break}}add&&this._triggers.push(candidate)}}}let removals;for(let i=0;i<this._specializations.length;i++){const child=this._specializations[i];child._removeTrigger(trigger,visited)&&(removed=!0),0===child.triggers.length&&(removals||(removals=[]),removals.push(child))}if(removals)for(const removal of removals){const removedIndex=this._specializations.findIndex(item=>item===removal);if(removedIndex>=0){this._specializations.splice(removedIndex,1);for(const specialization of removal.specializations){let add=!0;for(const parent of this._specializations)if(parent.relationship(specialization)===relationshipType_1.RelationshipType.generalizes){add=!1;break}add&&this._specializations.push(specialization)}}}return removed}_addSpecialization(specialization){let removals,added=!1,skip=!1;for(let i=0;i<this._specializations.length;i++){const child=this._specializations[i],reln=specialization.relationship(child);if(reln===relationshipType_1.RelationshipType.equal){skip=!0;break}if(reln===relationshipType_1.RelationshipType.generalizes)removals||(removals=[]),removals.push(child);else if(reln===relationshipType_1.RelationshipType.specializes){skip=!0;break}}if(!skip){if(removals)for(const removal of removals){const removed=this._specializations.findIndex(item=>item===removal);removed>=0&&(specialization._addSpecialization(this._specializations[removed]),this._specializations.splice(removed,1))}this._specializations.push(specialization),added=!0}return added}};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjbGF1c2VfMSIsInJlcXVpcmUiLCJyZWxhdGlvbnNoaXBUeXBlXzEiLCJPcGVyYXRpb24iLCJOb2RlIiwiW29iamVjdCBPYmplY3RdIiwiY2xhdXNlIiwidHJlZSIsInRyaWdnZXIiLCJ0aGlzIiwiX2FsbFRyaWdnZXJzIiwiX3RyaWdnZXJzIiwiX3NwZWNpYWxpemF0aW9ucyIsIkNsYXVzZSIsInB1c2giLCJ0cmlnZ2VycyIsImFsbFRyaWdnZXJzIiwic3BlY2lhbGl6YXRpb25zIiwiYnVpbGRlciIsImluZGVudCIsInRvU3RyaW5nIiwib3RoZXIiLCJyZWxhdGlvbnNoaXAiLCJjb21wYXJlcnMiLCJzdGF0ZSIsIm1hdGNoZXMiLCJTZXQiLCJfbWF0Y2hlcyIsIk1hcCIsIkFycmF5IiwiZnJvbSIsInRyaWdnZXJOb2RlIiwiX2FkZE5vZGUiLCJhZGRlZCIsIl9yZW1vdmVUcmlnZ2VyIiwib3BzIiwiaGFzIiwibm9uZSIsIm9wIiwiUmVsYXRpb25zaGlwVHlwZSIsImVxdWFsIiwiZm91bmQiLCJ1bmRlZmluZWQiLCJmaW5kIiwiZXhpc3RpbmciLCJhY3Rpb24iLCJhZGQiLCJpIiwibGVuZ3RoIiwicmVsbiIsImdlbmVyYWxpemVzIiwic3BlY2lhbGl6ZXMiLCJzcGxpY2UiLCJpbmNvbXBhcmFibGUiLCJjaGlsZCIsIl9hZGRTcGVjaWFsaXphdGlvbiIsImluc2VydGVkIiwicmVtb3ZhbHMiLCJmb3VuZE9uZSIsImNoaWxkT3AiLCJyZW1vdmFsIiwicmVtb3ZlZCIsImZpbmRJbmRleCIsIml0ZW0iLCJzZXQiLCJtYXRjaGVkIiwiZ2V0IiwibWF0Y2giLCJlcnJvciIsInRyeUV2YWx1YXRlIiwidmlzaXRlZCIsImFsbFRyaWdnZXJJbmRleCIsInRyaWdnZXJJbmRleCIsImNhbmRpZGF0ZSIsInJlbW92ZWRJbmRleCIsInNwZWNpYWxpemF0aW9u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