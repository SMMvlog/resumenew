from django.shortcuts import render,redirect
from django.core.mail import send_mass_mail
from django.contrib import messages
from .models import Contact


def home(request):
    context ={'home':'active'}
    return render(request,'home.html',context)

def contact(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']
        con = Contact(name=name,email=email,subject=subject,message=message)
        con.save()
        url = f"http://127.0.0.1:8000/con_rev/{con.id}"
        msg = (f'The Mail From Resume Application',f'The Person name is {name} ,\nAnd He/She contact for: {subject},\n You can reply him/her by this link: {url}','mehboob61923@gmail.com',['mehboob61923@gmail.com'])
        send_mass_mail((msg,),fail_silently=False)
        messages.success(request,"message sent successfully!!")
        return redirect("contact")
        
    context ={'contact':'active'}
    return render(request,'contact.html',context)

def contact_review(request):
    return render(request,'contact_review.html')
