<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $email;

    #[ORM\Column(type: 'json')]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\Column(type: 'string', length: 10)]
    private $firstname;

    #[ORM\Column(type: 'string', length: 20)]
    private $lastname;

    #[ORM\Column(type: 'string', length: 255)]
    private $picture;

    #[ORM\Column(type: 'text')]
    private $description;

    #[ORM\ManyToMany(targetEntity: Skill::class, inversedBy: 'users')]
    private $skills;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $linkGithub;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $linkFacebook;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $linkInstagram;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $linkLinkedin;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $linkDiscord;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $linkTwitter;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $linkTwitch;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $linkTiktok;

    public function __construct()
    {
        $this->skills = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection|Skill[]
     */
    public function getSkills(): Collection
    {
        return $this->skills;
    }

    public function addSkill(Skill $skill): self
    {
        if (!$this->skills->contains($skill)) {
            $this->skills[] = $skill;
        }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        $this->skills->removeElement($skill);

        return $this;
    }

    public function getLinkGithub(): ?string
    {
        return $this->linkGithub;
    }

    public function setLinkGithub(?string $linkGithub): self
    {
        $this->linkGithub = $linkGithub;

        return $this;
    }

    public function getLinkFacebook(): ?string
    {
        return $this->linkFacebook;
    }

    public function setLinkFacebook(?string $linkFacebook): self
    {
        $this->linkFacebook = $linkFacebook;

        return $this;
    }

    public function getLinkInstagram(): ?string
    {
        return $this->linkInstagram;
    }

    public function setLinkInstagram(?string $linkInstagram): self
    {
        $this->linkInstagram = $linkInstagram;

        return $this;
    }

    public function getLinkLinkedin(): ?string
    {
        return $this->linkLinkedin;
    }

    public function setLinkLinkedin(?string $linkLinkedin): self
    {
        $this->linkLinkedin = $linkLinkedin;

        return $this;
    }

    public function getLinkDiscord(): ?string
    {
        return $this->linkDiscord;
    }

    public function setLinkDiscord(?string $linkDiscord): self
    {
        $this->linkDiscord = $linkDiscord;

        return $this;
    }

    public function getLinkTwitter(): ?string
    {
        return $this->linkTwitter;
    }

    public function setLinkTwitter(?string $linkTwitter): self
    {
        $this->linkTwitter = $linkTwitter;

        return $this;
    }

    public function getLinkTwitch(): ?string
    {
        return $this->linkTwitch;
    }

    public function setLinkTwitch(?string $linkTwitch): self
    {
        $this->linkTwitch = $linkTwitch;

        return $this;
    }

    public function getLinkTiktok(): ?string
    {
        return $this->linkTiktok;
    }

    public function setLinkTiktok(?string $linkTiktok): self
    {
        $this->linkTiktok = $linkTiktok;

        return $this;
    }
}
