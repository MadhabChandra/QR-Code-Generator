from django.shortcuts import render
import qrcode
from _io import BytesIO
import base64



# Create your views here.
def CreateQR(req):
    if req.method == "POST":
        name = req.POST.get('name')
        phone= req.POST.get('phone')
        link = req.POST.get('link')
        image = qrcode.make(link+"Name"+name+"phone"+phone, box_size = 10)
        image_pil = image.get_image()
        stream = BytesIO()
        image_pil.save(stream, format='PNG')
        image_data = stream.getvalue()
        image_base64 = base64.b64encode(image_data).decode('utf-8')
        return render(req, 'createqr.html', {'image':image_base64})
    else:
        return render(req, 'createqr.html')