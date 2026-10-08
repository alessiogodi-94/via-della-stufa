"""Genera i QR code della guida.

- qr/wifi.svg       : QR Wi-Fi (fotocamera -> "Connetti"), mostrato nella pagina
- qr/guida.svg/.png : QR verso l'indirizzo pubblico della guida, da stampare
Uso: python tools/make_qr.py [URL_GUIDA]
"""
import sys
from pathlib import Path
import segno
from segno import helpers

QR = Path(__file__).resolve().parent.parent / "qr"
INCHIOSTRO = "#1b1a17"

# Dati Wi-Fi: devono restare allineati a content.js
WIFI_SSID = "Vodafone-C00000051"
WIFI_PASSWORD = "6KGRsrCfsYgsMfPT"

helpers.make_wifi(ssid=WIFI_SSID, password=WIFI_PASSWORD, security="WPA").save(
    QR / "wifi.svg", scale=6, border=1, dark=INCHIOSTRO, light=None, svgclass=None, lineclass=None, omitsize=True)
print("qr/wifi.svg")

if len(sys.argv) > 1:
    url = sys.argv[1]
    qr = segno.make(url, error="h")
    qr.save(QR / "guida.svg", scale=10, border=2, dark=INCHIOSTRO, omitsize=True)
    qr.save(QR / "guida.png", scale=24, border=2, dark=INCHIOSTRO)
    print("qr/guida.svg + qr/guida.png ->", url)
