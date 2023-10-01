import { isProxy } from "vue"
export function convertModelToFormData(model, form, namespace = "") {
    const formData = form || new FormData()
    if (model instanceof File) {
      formData.append(namespace, model)
      return
    }
  
    if (
      !(model instanceof Array) &&
      typeof model !== "object" &&
      !isProxy(model)
    ) {
      if (model instanceof Date) {
        formData.append(namespace, model.toISOString())
      } else {
        if(typeof model == "boolean"){
          formData.append(namespace, model?1:0)
        } else {
          formData.append(namespace, model.toString())
        }
      }
    } else
      for (const propertyName in model) {
        const formKey = namespace
          ? `${namespace}[${propertyName}]`
          : propertyName
        if (model[propertyName] instanceof Array) {
          model[propertyName].forEach((element, index) => {
            const tempFormKey = `${formKey}[${index}]`
            convertModelToFormData(element, formData, tempFormKey)
          })
        } else {
          if (model[propertyName] != null) {
            convertModelToFormData(model[propertyName], formData, formKey)
          }
        }
      }
    return formData
  }