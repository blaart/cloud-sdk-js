"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEntitySharesEntityType2RequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TestEntitySharesEntityType2_1 = require("./TestEntitySharesEntityType2");
/**
 * Request builder class for operations supported on the [[TestEntitySharesEntityType2]] entity.
 */
var TestEntitySharesEntityType2RequestBuilder = /** @class */ (function (_super) {
    __extends(TestEntitySharesEntityType2RequestBuilder, _super);
    function TestEntitySharesEntityType2RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TestEntitySharesEntityType2` entity based on its keys.
     * @param keyPropertyGuid Key property. See [[TestEntitySharesEntityType2.keyPropertyGuid]].
     * @param keyPropertyString Key property. See [[TestEntitySharesEntityType2.keyPropertyString]].
     * @returns A request builder for creating requests to retrieve one `TestEntitySharesEntityType2` entity based on its keys.
     */
    TestEntitySharesEntityType2RequestBuilder.prototype.getByKey = function (keyPropertyGuid, keyPropertyString) {
        return new core_1.GetByKeyRequestBuilderV4(TestEntitySharesEntityType2_1.TestEntitySharesEntityType2, {
            KeyPropertyGuid: keyPropertyGuid,
            KeyPropertyString: keyPropertyString
        });
    };
    /**
     * Returns a request builder for querying all `TestEntitySharesEntityType2` entities.
     * @returns A request builder for creating requests to retrieve all `TestEntitySharesEntityType2` entities.
     */
    TestEntitySharesEntityType2RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(TestEntitySharesEntityType2_1.TestEntitySharesEntityType2);
    };
    /**
     * Returns a request builder for creating a `TestEntitySharesEntityType2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TestEntitySharesEntityType2`.
     */
    TestEntitySharesEntityType2RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(TestEntitySharesEntityType2_1.TestEntitySharesEntityType2, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TestEntitySharesEntityType2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TestEntitySharesEntityType2`.
     */
    TestEntitySharesEntityType2RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(TestEntitySharesEntityType2_1.TestEntitySharesEntityType2, entity);
    };
    TestEntitySharesEntityType2RequestBuilder.prototype.delete = function (keyPropertyGuidOrEntity, keyPropertyString) {
        return new core_1.DeleteRequestBuilderV4(TestEntitySharesEntityType2_1.TestEntitySharesEntityType2, keyPropertyGuidOrEntity instanceof TestEntitySharesEntityType2_1.TestEntitySharesEntityType2 ? keyPropertyGuidOrEntity : {
            KeyPropertyGuid: keyPropertyGuidOrEntity,
            KeyPropertyString: keyPropertyString
        });
    };
    return TestEntitySharesEntityType2RequestBuilder;
}(core_1.RequestBuilder));
exports.TestEntitySharesEntityType2RequestBuilder = TestEntitySharesEntityType2RequestBuilder;
//# sourceMappingURL=TestEntitySharesEntityType2RequestBuilder.js.map