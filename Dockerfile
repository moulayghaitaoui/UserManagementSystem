
FROM php:8.3-fpm

# تثبيت البرامج اللازمة
RUN apt-get update && apt-get install -y \
    git curl zip unzip \
    libpng-dev libonig-dev libxml2-dev libzip-dev \
    npm nodejs \
    && docker-php-ext-install pdo pdo_mysql mbstring zip \
    && apt-get clean


WORKDIR /var/www

# cope project files
COPY . .

# تثبيت Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#install composer dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

#install node modules
RUN npm install --legacy-peer-deps && npm run build


EXPOSE 8000

# أمر التشغيل
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
