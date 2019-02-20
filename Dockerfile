FROM node:10.15.1

COPY . /

EXPOSE 3004

CMD ["npm", "start"]