FROM mysql:5.7

# Active native AIO on linux
CMD [ "--innodb-use-native-aio=0" ]

ADD setup.sql /docker-entrypoint-initdb.d/