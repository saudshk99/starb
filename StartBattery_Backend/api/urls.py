from django.urls import path
from .views import Warrenty_Claim,get_Count_Register,Shop_Users,MyTokenObtainPairView
from .models import warrenty_claims,User
from.serializers import Warrent_Claim_Serializer,UserSerializer

from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)



urlpatterns = [
    
    path('warrenty-get/',Warrenty_Claim.as_view(queryset=warrenty_claims.objects.all(), serializer_class=Warrent_Claim_Serializer),name='Warrenty_get_all'),
    path('get_Count_Register/',get_Count_Register,name='get_Count_Register'),
    path('users/',Shop_Users.as_view(),name='Shop_Users'),
#     path('users/Auth/',Auth.as_view(),name='authUser'),
#     path('users/logout/',logOut.as_view(),name='logOut'),
#     path('users/getInfo/',GetLoginInfo.as_view(),name="getLoginInfo")
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
