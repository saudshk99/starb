from rest_framework.serializers import ModelSerializer
from .models import warrenty_claims,User
from djoser.serializers import UserCreateSerializer



class Warrent_Claim_Serializer(ModelSerializer):


    class Meta:
        model=warrenty_claims
        fields='__all__'



class UserSerializer(UserCreateSerializer):

    class Meta:
        model=User
        fields='__all__'



