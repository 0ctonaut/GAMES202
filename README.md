# GAMES101

## SETUP

1. Confirm `GenProj4VS2022.bat`

2. Run `vendor/premake/premake5.exe` to generate the solution file for visual studio 2022.

---

## LABS

### LAB1

Hard Shadow
| ShadowMap Size | Shadows |
| --- | --- |
| 256  | ![](./images/lab1_Hard_SM256.png) |
| 1024 | ![](./images/lab1_Hard_SM1024.png)|
| 2048 | ![](./images/lab1_Hard_SM2048.png)|


PCF with `ShadowMap Size = 2048 * 2048`

| Filter Size | Shadows |
| --- | --- |
| 5  | ![](./images/lab1_PCF_SM2048_Filter5_Sample20.png) |
| 10 | ![](./images/lab1_PCF_SM2048_Filter10_Sample20.png)|
| 20 | ![](./images/lab1_PCF_SM2048_Filter20_Sample20.png)|

| Sample Num | Shadows |
| --- | --- |
| 50  | ![](./images/lab1_PCF_SM2048_Filter20_Sample50.png) |
| 100 | ![](./images/lab1_PCF_SM2048_Filter20_Sample100.png)|
| 200 | ![](./images/lab1_PCF_SM2048_Filter20_Sample200.png)|

PCSS with `ShadowMap Size = 2048 * 2048`, `Sample Num = 200` and `Filter Size = 20`

![](./images/lab1_PCSS_SM2048_Filter20_Sample200.png)

---
