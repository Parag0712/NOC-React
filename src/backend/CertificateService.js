import axios from "axios";

class Certificate {

    constructor() {
        this.api = axios.create({
            baseURL: '/api/v1/',
            withCredentials: true
        });
    }

    // Register Function
    async createCertificateReq({ student_id, student_name, student_sem, student_email, student_phoneNo, hr_name, hr_email, hr_phoneNo, company_name, company_location, college_name, college_branch }, internship_ending_date, internship_starting_date, token, certificate_status = "pending") {

        console.log(token);
        try {
            const response = await this.api.post(
                'certificate/reqForCertificate',
                {
                    student_id,
                    student_name,
                    student_sem,
                    student_email,
                    student_phoneNo,
                    hr_name,
                    hr_email,
                    hr_phoneNo,
                    company_name,
                    company_location,
                    college_name,
                    college_branch,
                    internship_ending_date,
                    internship_starting_date,
                    certificate_status:"pending"
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
            );


            return response.data;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    // Login Function
    async login({ email, password }) {
        try {
            const response = await this.api.post('users/login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            return response.data;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

}

const CertificateService = new Certificate();
export default CertificateService;