cd /home/ec2-user/stupidscore/
npm install
cd /home/ec2-user/stupidscore/stupidscore-back
npm install
npm ci
node ./bin/www
#sudo systemctl daemon-reload
#sudo systemctl enable --now node.service
#sudo systemctl status node.service