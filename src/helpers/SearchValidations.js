export const searchValidation = values => {
    const errors = {};
    if(!values.search) {
        errors.search = "Please enter a name"
    }
    return errors
}
