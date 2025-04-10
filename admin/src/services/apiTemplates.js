import api from '@/utils/api'
import toast from 'react-hot-toast'

export const getAllTemplates = async () => {
    try {
        let { data } = await api.get('/api/admin/templates')

        return data.templates
    }
    catch (err) {
        console.log('Error: ', err.message)
        toast.error(err.message)
    }
}

export const uploadNewTemplate = async ({ accessToken, newTemplateData }) => {
    try {
        let { data } = await api.post("/api/admin/upload-template", newTemplateData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${accessToken}`,
            }
        })

        return data.template
    } catch (error) {
        toast.error(error.message)
    }
}

export const deleteTemplate = async ({ accessToken, templateId }) => {
    try {
        let { data } = await api.post('/api/admin/delete-template', { templateId }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        return data
    }
    catch (err) {
        console.log(err.message)
        toast.error(err.message)
    }
}