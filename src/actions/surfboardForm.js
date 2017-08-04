// ** Action Creators **
export const updateSurfboardFormData = surfboardFormData => {
  return {
    type: 'UPDATED_DATA',
    surfboardFormData
  }
}

export const resetSurfboardForm = () => {
  return {
    type: 'RESET_SURFBOARD_FORM'
  }
}