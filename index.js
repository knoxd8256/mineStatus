var app = new Vue({
    el: "#app",
    data: {
        hostname: "mc.yodelingbear.fun", 
        motd: "Loading...",
        icon: "https://cdn4.iconfinder.com/data/icons/web-pack/64/cloud-offline-512.png",
        online: false,
        players: ["Loading..."]
    },
    mounted() {
        fetch("https://api.mcsrvstat.us/2/mc.yodelingbear.fun")
            .then(response => response.json())
            .then(res => {
                if (res.online) {
                    this.motd = res.motd.clean[0];
                    this.icon = res.icon;
                    this.online = true;
                    this.players = res.players.list || ["None"];
                } else {
                    this.motd = "Offline"
                    this.players = ["Not Found"]
                }
            });
    } 
})