import { Meteor } from "meteor/meteor";
import { DomainsMixin } from "/client/modules/core/domains";
import { MeteorFileCollection, FileRecord } from "@reactioncommerce/file-collections";
import { MediaRecords } from "/lib/collections";

FileRecord.downloadEndpointPrefix = "/assets/files";
FileRecord.uploadEndpoint = "/assets/uploads";
FileRecord.absoluteUrlPrefix = DomainsMixin.absoluteUrl();

export const Media = new MeteorFileCollection("Media", {
  // The backing Meteor Mongo collection, which you must make sure is published to clients as necessary
  collection: MediaRecords,
  DDP: Meteor
});
