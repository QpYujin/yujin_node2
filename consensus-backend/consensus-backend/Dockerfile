FROM node:6.10.0

COPY . /var/www

WORKDIR /var/www/consensus-backend/server

RUN cd /var/www/consensus-backend/server

 
RUN npm install
  

EXPOSE 3001
EXPOSE 2005

ENTRYPOINT ["npm", "start"]
