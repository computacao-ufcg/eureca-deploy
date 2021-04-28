FROM ubuntu:16.04
RUN apt-get update
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y apache2
RUN apt-get install -y apache2-utils
RUN apt-get install -y nano vim

# Copy configs to inside container.

# Config apache2
COPY ./configs/apache2.conf /etc/apache2/

# Configs Eureca and Alumni
COPY ./configs/alumni.conf /etc/apache2/sites-available/
COPY ./configs/eureca.conf /etc/apache2/sites-available/

RUN chmod 644 /etc/apache2/sites-available/alumni.conf
RUN chmod 644 /etc/apache2/sites-available/eureca.conf

# Copy the build files to inside container.
COPY ./builds/alumni/build/. /var/www/alumni/
COPY ./builds/eureca/build/. /var/www/eureca/

# Comands
RUN a2enmod proxy proxy_http rewrite
# Removing default page
RUN a2dissite 000-default.conf 
# Add the new sites
RUN a2ensite eureca
RUN a2ensite alumni

ENTRYPOINT [ "apache2ctl" ]
CMD ["-DFOREGROUND"]