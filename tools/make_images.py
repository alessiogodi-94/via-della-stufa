"""Ridimensiona le foto originali (Desktop/via della stufa) in WebP leggeri per la pagina.

Uso: python tools/make_images.py
Le foto scelte e il nome di destinazione sono in SCELTE.
"""
from pathlib import Path
from PIL import Image, ImageOps

SRC = Path.home() / "Desktop" / "via della stufa"
DST = Path(__file__).resolve().parent.parent / "img"

# numero foto originale -> nome file nella pagina
SCELTE = {
    25: "soggiorno",
    1: "camera",
    22: "cucina",
    17: "salotto",
    9: "bagno",
    11: "doccia",
    13: "studio",
    19: "tavola",
    28: "mattei",
}

for num, nome in SCELTE.items():
    im = ImageOps.exif_transpose(Image.open(SRC / f"alessandra ed eva-{num}.jpg")).convert("RGB")
    for larghezza, suffisso in ((1600, ""), (800, "-s")):
        copia = im.copy()
        copia.thumbnail((larghezza, larghezza))
        out = DST / f"{nome}{suffisso}.webp"
        copia.save(out, "WEBP", quality=76, method=6)
        print(out.name, copia.size, f"{out.stat().st_size // 1024} KB")
