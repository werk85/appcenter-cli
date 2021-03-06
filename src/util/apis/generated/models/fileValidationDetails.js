/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Additional details required for file validation
 *
 */
class FileValidationDetails {
  /**
   * Create a FileValidationDetails.
   * @member {string} p12password
   * @member {string} [certificateUploadId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of FileValidationDetails
   *
   * @returns {object} metadata of FileValidationDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FileValidationDetails',
      type: {
        name: 'Composite',
        className: 'FileValidationDetails',
        modelProperties: {
          p12password: {
            required: true,
            serializedName: 'p12password',
            type: {
              name: 'String'
            }
          },
          certificateUploadId: {
            required: false,
            serializedName: 'certificateUploadId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FileValidationDetails;
