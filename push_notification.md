## Home-Dashboard Push Notification Guide

![alt text](https://github.com/tuanha2000vn/Home-Assistant-Dashboard/blob/master/images/push_notification_2.png)

The new version bring a deeper integration into Home Assistant. You can now register #Home-Dashboard as a Mobile App and allow sending notification to your device. No additional custom component required.

To enable this feature, please follow these 3 easy steps

## 1. Register Mobile App

![alt text](https://github.com/tuanha2000vn/Home-Assistant-Dashboard/blob/master/images/push_notification_1.png)
<br>Go to Settings and enable Push Notification, Home-Dashboard will register new app within Home Assistant, just click Restart Home Assistant when the registration.

## 2. Test Sending Notification with Picture

![alt text](https://github.com/tuanha2000vn/Home-Assistant-Dashboard/blob/master/images/push_notification_3.png)
<br>Home-Dashboard registered device will appear as a Mobile App, you can send notification directly into the device without additional custom component.
<br><br>
![alt text](https://github.com/tuanha2000vn/Home-Assistant-Dashboard/blob/master/images/push_notification_4.png)
<br>A notification with picture will appear in your device.

## 3. Delete Mobile App Integration
![alt text](https://github.com/tuanha2000vn/Home-Assistant-Dashboard/blob/master/images/push_notification_5.png)
<br>Go to Home Assistant > Configuration > Integrations > Mobile App: <App Name> and click the recycle bin icon.

## 4. Automatically send Notification to Home-Dashboard

First, we need to create folder www inside config if you don't already have one.
```
config/www
```
Then edit ***configuration.yaml*** by adding the following line to enable Home Assistant write file into www folder:

```
homeassistant:
  allowlist_external_dirs:
    - /config/www
```

Add notify.ALL_DEVICES service:
(Replace mobile_app_hdb_mobile_app_1234 with your registered device name)

```
notify:
  - name: ALL_DEVICES
    platform: group
    services:
      - service: mobile_app_hdb_mobile_app_1234
      - service: mobile_app_hdb_mobile_app_2345
      - service: mobile_app_hdb_mobile_app_3456
```
Send a simple notification when the light turned on

```
automation:
  - alias: Notification Light Turned On
    trigger:
      - entity_id: light.light_1
        platform: state
        to: "on
    action:
      - service: notify.ALL_DEVICES
        data:
          title: Simple Notification 
          message: Light Turned On
```
Send a notification with image whenever garage door is opened
(Replace http://home-dashboard.duckdns.org:8123/local/camera_1.jpg with your own data)

```
automation:
  - alias: 'Notify when garage door opened'
    trigger:
    - entity_id: cover.garage_door
      platform: state
      to: "open"
    action:
    - data_template:
        entity_id: camera.camera_1
        filename: /config/www/camera_1.jpg
      service: camera.snapshot
    - delay:
        seconds: 1
    - data_template:
        title: Garage Door 
        message: Opened
        data:
          image: http://home-dashboard.duckdns.org:8123/local/camera_1.jpg
      service: notify.ALL_DEVICES   
```
![alt text](https://github.com/tuanha2000vn/Home-Assistant-Dashboard/blob/master/images/push_notification_6.png)

## 5. Troubleshooting

### Error 404 during Mobile App registration:
- Make sure you have ***default_config:*** in configuration.yaml
- If you don't, add this line to configuration.yaml and restart Home Assistant
```
mobile_app:
```
https://developers.home-assistant.io/docs/api/native-app-integration/
