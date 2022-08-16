import { Client } from "discord-rpc";
const client = new Client({ transport: "ipc" });

client.on("ready", async () => {
    await client.setActivity({
        details: "Your Favourite Discord Bot !",
        state: "Supports BiliBili and many more !",
        largeImageText: "Listen to your favorite tunes",
        largeImageKey: "nezu-image",
        startTimestamp: Date.now(),
        buttons: [
            {
                label: "Invite NezukoChan",
                url: "https://nezu.my.id"
            },
            { label: "Join Support Server", url: "https://discord.gg/8hmbMUCVMD" }
        ]
    });
});

void client.login({ clientId: "616169470293049344" });
