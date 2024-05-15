from django import forms

class UserForm(forms.Form):
    name = forms.CharField(max_length=100)
    empid = forms.CharField(max_length=100)
    email = forms.EmailField()
    date = forms.DateField()
    password = forms.CharField(widget=forms.PasswordInput)
    cpassword = forms.CharField(widget=forms.PasswordInput)
    
    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        cpassword = cleaned_data.get('cpassword')

        if password and cpassword and password != cpassword:
            self.add_error('password', "Passwords do not match")

        return cleaned_data
