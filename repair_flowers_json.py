from pathlib import Path
import re

path = Path(r'd:\SIDRA\CapregSoft\hello react\flower-product-list\src\data\flowers.json')
text = path.read_text(encoding='utf-8')
text = re.sub(r'(?m)^(\s*)(id|name|category|price|image|inStock|description):(?!["\'])', lambda m: f'{m.group(1)}"{m.group(2)}":', text)
path.write_text(text, encoding='utf-8')
print('Repaired JSON keys in', path)
