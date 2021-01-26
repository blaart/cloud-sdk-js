/* tslint:disable */
/* eslint-disable */
/**
 * Workflow API for Cloud Foundry
 * This API uses the SAP Cloud Platform Workflow service. With the API, you can, for example, start new workflow instances and work with tasks.  Note (relevant only for SAP API Business Hub): For authentication purposes, the API uses OAuth 2.0 security (with JSON Web Token, JWT). Thus, \"Try Out\" only works with an explicitly configured environment. For more information on how to obtain the necessary parameters, please see [Determine Service Configuration Parameters](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/abb1f66b2c3b4983b6b656654cfc3d2b.html) in the documentation. The OAuth client you use must have [extended scopes](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/baf2847f6d1c401a83ca3a1427b8ff84.html).  Note: These APIs are designed for loosely coupled clients. This means:  - If workflow service adds fields to responses, the API version number does not increase. Your client must ignore new fields. - The order of fields in responses and of entries in arrays may change. This applies unless the API provides an explicit means to specify the desired order. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { WorkflowInstanceExecutionLogChanges } from './workflow-instance-execution-log-changes';
import { WorkflowInstanceExecutionLogError } from './workflow-instance-execution-log-error';
import { WorkflowInstanceExecutionLogRecipients } from './workflow-instance-execution-log-recipients';
import { WorkflowInstanceExecutionLogRestEndpoint } from './workflow-instance-execution-log-rest-endpoint';

/**
 * 
 * @export
 * @interface WorkflowInstanceExecutionLog
 */
export interface WorkflowInstanceExecutionLog {
    /**
     * The ID of the execution log entry.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    id: string;
    /**
     * The execution log entry type.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    type: WorkflowInstanceExecutionLogTypeEnum;
    /**
     * The time the execution log entry was created.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    timestamp: string;
    /**
     * An ID that groups events together by their activity and their token of execution in the workflow. For example, all events relating to the same script task (started, failed, completed) would have the same referenceInstanceId. 
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    referenceInstanceId: string;
    /**
     * The ID of the model element. The ID is at most 255 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    activityId?: string;
    /**
     * The ID of the parent workflow instance. The ID is at most 64 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    parentInstanceId?: string;
    /**
     * The ID of the root workflow instance. The ID is at most 64 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    rootInstanceId?: string;
    /**
     * The name of the model element or the subject of the user task. The name/subject is at most 255 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    subject?: string;
    /**
     * The user who executed the action. The user ID is at most 255 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    userId?: string;
    /**
     * 
     * @type {WorkflowInstanceExecutionLogError}
     * @memberof WorkflowInstanceExecutionLog
     */
    error?: WorkflowInstanceExecutionLogError;
    /**
     * The recipient users of a user task.
     * @type {Set<string>}
     * @memberof WorkflowInstanceExecutionLog
     */
    recipientUsers?: Set<string>;
    /**
     * The recipient groups of a user task.
     * @type {Set<string>}
     * @memberof WorkflowInstanceExecutionLog
     */
    recipientGroups?: Set<string>;
    /**
     * The user who started the user task. The user ID is at most 255 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    initiatorId?: string;
    /**
     * 
     * @type {WorkflowInstanceExecutionLogRestEndpoint}
     * @memberof WorkflowInstanceExecutionLog
     */
    restEndpoint?: WorkflowInstanceExecutionLogRestEndpoint;
    /**
     * The remaining number of retries. If no retries are left the workflow instance is ERRONEOUS.
     * @type {number}
     * @memberof WorkflowInstanceExecutionLog
     */
    retriesRemaining?: number;
    /**
     * The ID of the user task. The ID is at least 36 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    taskId?: string;
    /**
     * 
     * @type {WorkflowInstanceExecutionLogChanges}
     * @memberof WorkflowInstanceExecutionLog
     */
    changes?: WorkflowInstanceExecutionLogChanges;
    /**
     * 
     * @type {WorkflowInstanceExecutionLogRecipients}
     * @memberof WorkflowInstanceExecutionLog
     */
    recipients?: WorkflowInstanceExecutionLogRecipients;
    /**
     * Indicates whether the sending of emails is disabled.
     * @type {boolean}
     * @memberof WorkflowInstanceExecutionLog
     */
    sendDisabled?: boolean;
    /**
     * The name of the principal on whose behalf the service task has been executed.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    propagatedPrincipal?: string;
    /**
     * The name of the affected model element. The activity name is at most 255 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    activityName?: string;
    /**
     * The activityId of the boundary timer event causing the cancellation of the user task. It is at most 255 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    cause?: string;
    /**
     * The name of the boundary timer event. The name is at most 64 characters long.
     * @type {string}
     * @memberof WorkflowInstanceExecutionLog
     */
    boundaryEventName?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WorkflowInstanceExecutionLogTypeEnum {
    WorkflowStarted = 'WORKFLOW_STARTED',
    WorkflowCompleted = 'WORKFLOW_COMPLETED',
    WorkflowCanceled = 'WORKFLOW_CANCELED',
    WorkflowContinued = 'WORKFLOW_CONTINUED',
    WorkflowSuspended = 'WORKFLOW_SUSPENDED',
    WorkflowContextOverwrittenByAdmin = 'WORKFLOW_CONTEXT_OVERWRITTEN_BY_ADMIN',
    WorkflowContextPatchedByAdmin = 'WORKFLOW_CONTEXT_PATCHED_BY_ADMIN',
    WorkflowRolesPatchedByAdmin = 'WORKFLOW_ROLES_PATCHED_BY_ADMIN',
    WorkflowResumed = 'WORKFLOW_RESUMED',
    UsertaskCreated = 'USERTASK_CREATED',
    UsertaskClaimed = 'USERTASK_CLAIMED',
    UsertaskReleased = 'USERTASK_RELEASED',
    UsertaskCompleted = 'USERTASK_COMPLETED',
    UsertaskFailed = 'USERTASK_FAILED',
    UsertaskPatchedByAdmin = 'USERTASK_PATCHED_BY_ADMIN',
    UsertaskCanceledByBoundaryEvent = 'USERTASK_CANCELED_BY_BOUNDARY_EVENT',
    ServicetaskCreated = 'SERVICETASK_CREATED',
    ServicetaskCompleted = 'SERVICETASK_COMPLETED',
    ServicetaskFailed = 'SERVICETASK_FAILED',
    ScripttaskCreated = 'SCRIPTTASK_CREATED',
    ScripttaskCompleted = 'SCRIPTTASK_COMPLETED',
    ScripttaskFailed = 'SCRIPTTASK_FAILED',
    IntermediateTimerEventReached = 'INTERMEDIATE_TIMER_EVENT_REACHED',
    IntermediateTimerEventTriggered = 'INTERMEDIATE_TIMER_EVENT_TRIGGERED',
    IntermediateMessageEventReached = 'INTERMEDIATE_MESSAGE_EVENT_REACHED',
    IntermediateMessageEventTriggered = 'INTERMEDIATE_MESSAGE_EVENT_TRIGGERED',
    NoncancelingBoundaryTimerEventTriggered = 'NONCANCELING_BOUNDARY_TIMER_EVENT_TRIGGERED',
    CancelingBoundaryTimerEventTriggered = 'CANCELING_BOUNDARY_TIMER_EVENT_TRIGGERED',
    MailtaskCreated = 'MAILTASK_CREATED',
    MailtaskCompleted = 'MAILTASK_COMPLETED',
    MailtaskFailed = 'MAILTASK_FAILED',
    ExclusiveGatewayReached = 'EXCLUSIVE_GATEWAY_REACHED',
    ExclusiveGatewayFailed = 'EXCLUSIVE_GATEWAY_FAILED',
    ParallelGatewayReached = 'PARALLEL_GATEWAY_REACHED',
    ParallelGatewayFailed = 'PARALLEL_GATEWAY_FAILED'
}



