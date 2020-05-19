import { AppThunk } from "../index";
import {
  ADD_EXISTING_DATASET_START,
  ADD_EXISTING_DATASET_SUCCESS,
  MediaActionTypes,
  SET_MEDIA_FILES,
  UPLOAD_MEDIA_FILES_START,
  UPLOAD_MEDIA_FILES_SUCCESS,
} from "./types";
import { addExistingDatasetRequest, uploadMediaFilesRequest } from "../../api";
import { setErrorAction } from '../error';

export function setMediaFiles(files: File[]): MediaActionTypes {
  return {
    type: SET_MEDIA_FILES,
    mediaFiles: files
  }
}

export function uploadMediaFilesStart(): MediaActionTypes {
  return {
    type: UPLOAD_MEDIA_FILES_START,
  };
}

export function uploadMediaFilesSuccess(butchName: string): MediaActionTypes {
  return {
    type: UPLOAD_MEDIA_FILES_SUCCESS,
    batchName: butchName
  }
}

export const uploadMediaFiles = (files: File[], bucketId: string, path: string): AppThunk => dispatch => {
  dispatch(uploadMediaFilesStart());
  return uploadMediaFilesRequest(files, bucketId, path)
    .then((response) => dispatch(uploadMediaFilesSuccess(response.data)))
    .catch((error) => dispatch(setErrorAction(error)));
};

export function addExistingDatasetStart(): MediaActionTypes {
  return {
    type: ADD_EXISTING_DATASET_START,
  };
}

export function addExistingDatasetSuccess(addedDataSets: number): MediaActionTypes {
  return {
    type: ADD_EXISTING_DATASET_SUCCESS,
    addedDataSets
  }
}

export const addExistingDataset = (bucketId: string, path: string): AppThunk => dispatch => {
  dispatch(addExistingDatasetStart());
  return addExistingDatasetRequest(bucketId, path)
    .then((response) => dispatch(addExistingDatasetSuccess(response.data.imported)))
    .catch((error) => dispatch(setErrorAction(error)));
};
