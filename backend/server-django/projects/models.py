import uuid
from django.db import models

from users.models import Profile

class Projects(models.Model):
    #add owner which has been tagged as a ForeignKey
    owner = models.ForeignKey(
        Profile, null=True, blank=True, on_delete=models.SET_NULL
    )


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    id = models.UUIDField(
        default=uuid.uuid4, unique=True, primary_key=True, editable=False
    )

    
    def __str__(self):
        return self.title



