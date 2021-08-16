class Github {
    constructor() {
        this.client_id = '450a4603f2c25d6faa43';
        this.client_secret = '4812e777e0f547c23aea615cc1c16a8e61609099';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

     async getUser(user) {
         // Calling profile data
         const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

         // Calling repo data
         const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

         const profile = await profileResponse.json();
         const repos = await repoResponse.json();

         return{
             profile,
             repos
         }
     }
}