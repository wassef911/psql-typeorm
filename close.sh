# close port
sudo kill $(sudo lsof -t -i:8080)
echo 'closing port 8080 boss'
