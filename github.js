class GitHub{
    constructor() {
        this.client_id = '6c03681ed580dea2a1b0';
        this.cliend_secret = 'f24951a51bc3b87988c8d0b86d6c45365bd971e2';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }


}