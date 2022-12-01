DROP DATABASE IF EXISTS checking_nodejs;

CREATE DATABASE checking_nodejs;

USE checking_nodejs;

INSERT INTO `admin`(`id`, `name`, `email`, `password`, `role`, `reset_link`, `reset_link_time`, `modifiedAt`, `createdAt`, `avatar`, `role_id`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]')

INSERT INTO `user`(`id`, `name`, `email`, `password`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')

INSERT INTO `campaigns`(`id`, `campaign_id`, `name`, `email`, `status`, `modifiedAt`, `createdAt`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')